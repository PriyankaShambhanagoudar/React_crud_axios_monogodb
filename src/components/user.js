import React, { useState, useEffect } from "react";
import FormDetails from "./formDetails";
import Tablelist from "./tablelist";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

//axios  json-server --watch db.json  --port 3005
//const url = "http://localhost:3005/details";

//mongodb npm run dev 
const url = "http://localhost:5000/api/posts"

const defaultData = {
  FirstName: "",
  LastName: "",
};

const User = (props) => {
  //form
  const [userData, setUserData] = useState(defaultData);

  //table
  const [dataList, setDataList] = useState([]);

  //id
  const [Id, setId] = useState(null);

  //status
  const [status, setStatus] = useState();

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(defaultData);


    if (status) {
      //patch request
      axios
        .patch(`${url}/${Id}`, userData)
        .then((res) => {
          getList()
        })
        .catch((err) => console.log(err));
    } else {
      //post request
      axios
        .post(url, userData)
        .then(() => {
          getList();
        })
        .catch((error) => {
          console.log(error);
        });
    }



  };

  //get request
  useEffect(() => {
    getList();
  }, [userData]);

  const getList = () => {
    axios
      .get(url)
      .then((res) => {
        setDataList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //delete id
  const deleteId = (data) => {
    console.log(data);
    axios
      .delete(`${url}/${data}`)
      .then(() => {
        getList();

      })
      .catch((err) => console.log(err));
  };

  const editId = (data) => {
    //back to form
    setUserData(data);
    setId(data._id);

    //status()
    setStatus(true);
  };

  return (
    <div>
      <Row>
        <Col sm={6}>
          <FormDetails
            handleUser={handleUser}
            handleSubmit={handleSubmit}
            userData={userData}
          />
        </Col>
        <Col sm={6}>
          <Tablelist dataList={dataList} deleteId={deleteId} editId={editId} />
        </Col>
      </Row>
    </div>
  );
};

export default User;
