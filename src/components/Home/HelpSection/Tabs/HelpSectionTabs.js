import React from "react";
import { useState, useEffect } from "react";
import { query, where, orderBy, limit, endBefore, startAfter, limitToLast, getDocs, collection, getCountFromServer } from "firebase/firestore";
import {db} from "../../../../firebase_setup/firebase";
import HelpSectionTabsList from "./HelpSectionTabsList";

const collection_name = "organisations";
const limitNumber = 3;

const HelpSectionTabs =(props)=>{
    const { category } = props;
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    const [showLastPage, setShowLastPage] = useState(0);
    const [pending, setPending] = useState(false);
    const [pagesNumber, setPagesNumber] = useState(1);
    const [activeButton, setActiveButton] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const collection_ref = collection(db, collection_name);
            const q = query(collection_ref, where("oType", "==", category), limit(limitNumber), orderBy("created"));
            //const q = query(collection_ref, where("oType", "==", category), orderBy("created"));
            const q2 = query(collection_ref, where("oType", "==", category));
            const snapshot = await getCountFromServer(q2);
            const lastPage = Math.ceil((snapshot.data().count)/limitNumber);
            
            console.log("last",lastPage);

            const doc_refs = await getDocs(q);
                    const items = [];
                    doc_refs.forEach(organisations => {
                        items.push({
                            id: organisations.id, 
                            ...organisations.data()
                        })
                            return items
                    });
                    console.log('first item ', items);
                    console.log(category);
                    console.log(snapshot.data().count);
                    //console.log("list length", list.length, pagesNumber)
                    setList(items);
                    setPagesNumber(lastPage);
                    setShowLastPage(lastPage);
                    
                
        };
        fetchData();
    }, []);

      const showNext = ({item}) => {            

            const fetchtNextData = async () => {
              const collection_ref = collection(db, collection_name);
               const q = query(collection_ref, where("oType", "==", category), orderBy("created"), startAfter(item.created), limit(limitNumber));
              //const q = query(collection_ref, where("oType", "==", category), orderBy("created"), limit(limitNumber));
              //const q2 = query(collection_ref, where("oType", "==", category), orderBy("created"), limit(limitNumber));
              //const snapshot = await getCountFromServer(q2);
              //const lastPage = Math.ceil((snapshot.data().count)/limitNumber);

            const doc_refs = await getDocs(q);
            
                    const items = [];
                    doc_refs.forEach(organisations => {
                        items.push({
                            id: organisations.id, 
                            ...organisations.data()
                        })
                            return items
                    });
                    //setButtonDisabled(true);
                    //setOnClickHandle(() => showNext({ item: list[list.length - 1] }))
                    setList(items);
                    setPage(page + 1);
                    setActiveButton(activeButton+1);
                    //setPage(page);
                    //setPagesNumber(lastPage);
                    //setLastPage()
console.log("itemy:", item.created)
                
            };
             fetchtNextData();
            
      };

     const showPrevious = ({item}) => {
        
          const fetchPreviousData = async () => {
          const collection_ref = collection(db, collection_name);
          const q = query(collection_ref, where("oType", "==", category), orderBy("created"), endBefore(item.created), limitToLast(limitNumber) );
          const doc_refs = await getDocs(q);
          const items = [];
          doc_refs.forEach(organisations => {
              items.push({
                  id: organisations.id, 
                  ...organisations.data()
              })
                  return items
          });
          items.length === 0 ? setNextButtonDisabled(false):
                  setList(items);
                  setPage(page - 1);
                  setActiveButton(activeButton-1);
      };
      fetchPreviousData();
  };

    const renderButtons = () => {
        const buttons = [];
        for (let i = 1; i <= pagesNumber; i++) {
          buttons.push(
            // <button key={i} onClick={() => showPage({item: list[list.length - 1]}, i)} disabled={i===1}>
            <button className="btn__pagination-secondary" key={i} disabled={i===activeButton?false:true}>
              {i}
            </button>
          );
          console.log("to jest i:" + i)
        }
        //console.log(buttons);

        return buttons;
      };

    return (
        <>
            <ul>
            { pending && 
                <p>loading...</p>
              }
            {list.length > 0 && list.map(organisations => (
                <HelpSectionTabsList key={organisations.id} organisations={organisations} category={category}/>
            ))}    
            </ul>
              <div className="help__pagination">
                <span>
                  {pagesNumber === 1 ? "" : <button className="btn__pagination" disabled={page === 1 } onClick={() => showPrevious({ item: list[0] }) }>Poprzednie</button>}
                  {pagesNumber === 1 ? "" : renderButtons()}
                  {pagesNumber === 1 ? "" : <button className="btn__pagination" disabled={list.length < limitNumber || nextButtonDisabled || page === showLastPage } onClick={() => showNext({ item: list[list.length - 1] })} >Następne</button>}
                </span>
              </div>
        </>
    )
}

export default HelpSectionTabs;