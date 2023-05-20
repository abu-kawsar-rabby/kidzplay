import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardItems from '../../components/CardItems';

const ShopByCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categorys')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    return (
        <div className='text-center'>
            <h1 className='text-5xl font-bold mt-10'> Shop By Category</h1>
            <p className='my-5'>Discover a wide selection of products organized by category on our Shop By Category page.</p>

            <Tabs>
                <TabList className="bg-coral">
                    {categories &&
                        categories?.map(category => (
                            <Tab key={category?._id}><span className='font-bold text-2xl my-5 text-white'>{category?.category}</span></Tab>
                        ))}
                </TabList>


                {categories &&
                    categories.map(category => (
                        <TabPanel key={category?._id}>
                            {/* <h2>{category?.category}</h2> */}
                            <CardItems
                                category={category}
                            ></CardItems>

                        </TabPanel>
                    ))
                }
            </Tabs>
        </div>
    );
};

export default ShopByCategory;