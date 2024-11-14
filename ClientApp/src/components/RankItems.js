import React, { useState, useEffect } from 'react';
import MovieImageArr from './MovieImages';
import RankingGrid from './RankingGrid';
const RankItems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1;

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.preventDefault();
        const targetElm = ev.target;
        if (targetElm.nodeName === "IMG") {
            return false;
        }
        if (targetElm.childNodes.length === 0) {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
            {...item, ranking: parseInt(targetElm.id.substring(5))} : {...item, ranking: item.ranking})
        }
    }

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => results.json())
            .then(data => setItems(data))
            .catch(error => console.error('Erro ao buscar os dados:', error));
    }, [dataType]); // Adicione `dataType` como dependência se ele puder mudar

    return (

        <main>
            <RankingGrid items={items} imgArr={MovieImageArr}/>
            <div className='items-not-ranked'>
                {
                    items.length > 0 ? items.map((item, index) => (
                        <div className='unranked-cell'>

                            <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image} alt='semImagem' />
                        </div>
                    )) : <div>Loading...</div>
                }
            </div>
        </main>
    );
};

export default RankItems;
