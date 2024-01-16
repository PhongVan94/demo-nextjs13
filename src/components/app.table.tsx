'use client'

import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import CreateModal from './create.modal';


interface IProps {
    blogs: IBlog[];
}


const AppTable = (props: IProps) => {

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

    const { blogs } = props;
    console.log(">> check props", blogs)


    return (
        <>
            <div
                className='mb-3'
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <h3>Table Blogs</h3>
                <Button variant='secondary'
                    onClick={() => setShowModalCreate(true)}
                >Add new</Button>
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant='warning' className='mx-3'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
        </>

    )
}
export default AppTable