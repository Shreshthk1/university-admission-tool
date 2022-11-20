import {useEffect, useState, useRef} from 'react';
import DATABASELISTVIEW from './cmpnts/databaseListView'
import DATABASELISTHEADER from './cmpnts/databaseListHeader'
import USER_SERVICE from '../../services/user_service';
import { Component } from 'react';


    




class adminUserManagement extends Component {
    constructor(props) {
        super(props);
    
        // controls state of Programs.
        this.state = {
    
        };
      }

    List() {
        
    }
    const [list, setList] = useState([])
    getAllUserInformation = (e) => {
    USER_SERVICE.getUserInformation().then((response)=>{
        console.log(response);
    })
}


render() {
    return (
    <div className='h-screen w-screen bg-neutral-100 '>

        <div className='h-full w-full flex flex-col'>
            <div className='p-10 text-4xl'>
                ADMIN DASHBOARD
            </div>

            <div id='adminToolsContentContainer' className='h-full flex flex-col flex-1 mx-20 mb-20 p-2'>
                
                <div className='flex text-2xl mb-5'>
                    User Management
                </div>

                <div className=' flex-1 bg-white rounded-2xl drop-shadow-2xl'>
                    
                <DATABASELISTHEADER id="ID" firstName="First Name" lastName="Last Name" address="Address" email="Email" dob="Date Of Birth" country="Country" interests="Interests" role="Role"  />

                {list.map(data =>
                <DATABASELISTVIEW id="1" firstName="Test" lastName="Test" address="123 somestreetWay" email="lol@gmail.com" dob="11/11/1111" country="Canada" interests="sports" role="Student"  /> 
                    )
                }
                </div>
            </div>
        </div>

    </div>
  )
}
  
}

export default adminUserManagement