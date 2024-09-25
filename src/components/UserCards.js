import React from 'react'

function UserCards({ props }) {
    // console.log(props)
    return (

        <tr class="bg-white border-b text-black hover:bg-gray-50">

            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                {props.name}
            </th>
            <td class="px-6 py-4">
                {props.email}
            </td>
            <td class="px-6 py-4">
                {props.role}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={(e) => {
                        props.setUpdateUserId(props._id);
                        props.setFormOpener(true);
                        props.setChangeForm(true);
                        // console.log()
                        console.log(props._id) // Changed setFromOpener to setFormOpener
                    }}
                >
                    Edit
                </a>

                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    onClick={() => {
                        props.setDeleteUserId(props._id);
                    }}
                >
                    Remove
                </a>
            </td>
        </tr>









        // <div className=' border  shadow-xl rounded-md flex flex-col gap-4 p-3 min-w-[20rem]' key={props._id}>

        //     <div className=' flex gap-2  '>

        //         <div className='font-semibold flex flex-col gap-2' >
        //             <div >
        //                 <h1>Name : </h1>
        //             </div>

        //             <div>
        //                 <h1>Email : </h1>
        //             </div>



        //             <div>
        //                 <h1>Role : </h1>
        //             </div>

        //         </div>

        //         <div className=' flex flex-col gap-2' >
        //             <div>
        //                 <h1>{props.name}</h1>
        //             </div>
        //             <div>
        //                 <h1>{props.email}</h1>
        //             </div>

        //             <div>
        //                 <h1>{props.role}</h1>

        //             </div>
        //         </div>

        //     </div>

        //     <div className='flex gap-10 font-semibold text-white'>
        // <button
        //     className='bg-green-600 w-[40%] h-[2rem] rounded-sm hover:scale-105 transition-all duration-300'
        //     onClick={(e) => {
        //         props.setUpdateUserId(props._id);
        //         props.setFormOpener(true);
        //         props.setChangeForm(true)
        //         // console.log()
        //         console.log(props._id) // Changed setFromOpener to setFormOpener
        //     }}
        // >
        //     Edit
        // </button>
        // <button
        //     className='bg-red-600 w-[40%] h-[2rem] rounded-sm hover:scale-105 transition-all duration-300'
        //     onClick={() => {
        //         props.setDeleteUserId(props._id);
        //     }}
        // >
        //     Delete
        // </button>
        //     </div>
        // </div>
    )
}

export default UserCards