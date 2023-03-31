import React from 'react';
import { Button } from 'react-bootstrap';

const Page404 = () => {
  return (
    <div>
      <div style={{fontSize: "100px", marginTop: "200px", textAlign: "center"}}>Oops! 404</div>
        <p style={{textAlign: "center"}}>Looks like the page you were looking for does not exist</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="danger" href="/" size="lg">Go Home</Button>
      </div>
    </div>
  )
}

export default Page404