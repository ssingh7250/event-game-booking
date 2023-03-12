import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

 const Contact = () => {
    const[startdate , setstartdate]=useState("");
    const[starttime , setstarttime]=useState("");
    const[enddate , setenddate]=useState("");
    const[endtime , setendtime]=useState("");
    const[setupdate , setsetupdate]=useState("");
    const[setuptime , setsetuptime]=useState("");
    const[distance1,setdistance]=useState("");



    

    async function sendContact(user){

        try{
      const response = await fetch(`https://ecommerce-react-8ba56-default-rtdb.firebaseio.com/contact.json`,{
        method : "POST",
        body: JSON.stringify(user),
        headers :{
            "Content-Type" : 'application/json'
        }
      })

    const data = await  response.json();
    console.log(data)
        }
        catch(error){
            console.log(error.message)
        }
    }

    const  startdateChangeHandler=(event)=>{
      setstartdate(event.target.value)
    }

    const  starttimeChangeHandler=(event)=>{
      setstarttime(event.target.value)
    }
    const  enddateChangeHandler=(event)=>{
      setenddate(event.target.value)
    }
    const  endtimeChangeHandler=(event)=>{
      setendtime(event.target.value)
    }
    const  setupdateChangeHandler=(event)=>{
      setsetupdate(event.target.value)
    }
    const  setuptimeChangeHandler=(event)=>{
      setsetuptime(event.target.value)
    }
    const  distanceChangeHandler=(event)=>{
      setdistance(event.target.value)
    }

    

    const submitHandler=(event)=>{
      event.preventDefault();
      const User ={
       startdate:startdate,
       starttime:starttime,
       enddate:enddate,
       endtime:endtime,
       setupdate:setupdate,
       setuptime:setuptime
      }
      sendContact(User)
      alert("your data successfully saved");
      
      console.log(User)
    }

var fair=0;
      var totaldistance=distance1*2;
      if(totaldistance==0)
      {
        fair=0;
      }
      else if(totaldistance<30 )
      {
        fair=1500;
      }
      else{
        totaldistance=totaldistance-30;
        fair=1500+totaldistance*50;
      }
    
  return (
    <Container>
        <h3 className='text-center pt-4'>Contact Us</h3>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3  w-50" >
        <Form.Label htmlFor='name'>Event start</Form.Label>
        <Form.Control type="date" id='startdate' placeholder="Enter Name"  onChange={startdateChangeHandler} required/>
        <Form.Control type="time" id='starttime' placeholder="Enter Name"  onChange={starttimeChangeHandler}required/>
      </Form.Group>

      <Form.Group className="mb-3  w-50" >
        <Form.Label htmlFor='name'>Event end</Form.Label>
        <Form.Control type="date" id='enddate' placeholder="Enter Name" onChange={enddateChangeHandler} required />
        <Form.Control type="time" id='endtime' placeholder="Enter Name"  onChange={endtimeChangeHandler}required/>
      </Form.Group>

      <Form.Group className="mb-3  w-50" >
        <Form.Label htmlFor='name'>Setup date and time</Form.Label>
        <Form.Control type="date" id='setupdate' placeholder="Enter Name"  onChange={setupdateChangeHandler}required/>
        <Form.Control type="time" id='setuptime' placeholder="Enter Name" onChange={setuptimeChangeHandler}required/>
      </Form.Group>

      <Form.Group className="mb-3  w-50" >
        <Form.Label htmlFor='name'>Location</Form.Label>
        <select>

        <option>Baghajatin</option>
        <option>garia</option>
        <option>Jadavpur</option>
        <option>Sealdaha</option>



        </select>
     
      </Form.Group>

    

      <Form.Group className="mb-3 w-50" >
        <Form.Label htmlFor='mobile'>distance</Form.Label>
        <Form.Control id='mobile' type="number" placeholder="Enter distance" onChange={distanceChangeHandler} />
      </Form.Group>

      <Form.Group className="mb-3 w-50" >
        <Form.Label htmlFor='mobile'>Transpot charge -></Form.Label>
        {fair}
      </Form.Group>
    
      <Button  className='w-50 ps-2 pe-2' variant="primary" type="submit">
        Enquiry 
      </Button>
        </Form>
    </Container>
  )
}

export default Contact
