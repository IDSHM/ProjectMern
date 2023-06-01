import React, { createContext, useEffect, useState } from 'react'
export const appoContext = createContext();

const AppointementContext = (props) => {

    const getDefaultAppoCount = () => {
        let appos = {};
        for (let i = 1; i <= 10; i++) {
            appos[i] = 0;
        }
        return appos;
    }

    const [apposCount, setApposCount] = useState(getDefaultAppoCount());

    const addApposCount = (agentIdNo) => {
        setApposCount((prevState) => ({ ...prevState, [agentIdNo]: prevState[agentIdNo] + 1 }))
    }


    useEffect(() => {
        fetch("http://localhost:8000/api/books/getdatas", {
            method: "GET",
        })
            .then(res => res.json())
            .then((userData) => {
                let propertiesArr = userData.data
                console.log(propertiesArr);
                propertiesArr.map((item, index) => {
                    let aggid = item.propertyDetails.id;
                    return addApposCount(aggid)
                })

            })
        // console.log();
    }, [setApposCount])




    const contextValue = { apposCount, setApposCount, addApposCount }
    return (
        <appoContext.Provider value={contextValue}>
            {props.children}
        </appoContext.Provider>
    )
}

export default AppointementContext