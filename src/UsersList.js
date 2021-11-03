import React, { useEffect, useState } from 'react'
import { network } from './Network'
import { useStore } from './store/store';
import { UsersData } from './store/action';
export default function UsersList() {
    const [userInfo, setUserInfo] = useState([])
    const { state, dispatch } = useStore();
    useEffect(() => {
        (async () => {
            const usersResponse = await network.getUserInformation()
            if (usersResponse.data) {
                dispatch(UsersData(usersResponse.data));
                setUserInfo(usersResponse.data);
            }
        })();
    }, [])


    const searchByName = (e) => {

        if (state?.UserData) {
            let searchResult = state?.UserData?.filter(item => {
                if (item?.name?.toLowerCase().includes(e?.toLowerCase())) {
                    return item;
                }
            })
            setUserInfo(searchResult)
        }
    }

    return (
        <div className="usersData">
            <input className="inputbox" type='text' placeholder="Search by Name" onChange={(e) => { searchByName(e.target.value) }} />
            {userInfo.map((item) => {
                return (
                    <div key={item.id}>{item.name}</div>
                )
            })}
        </div>
    )
}