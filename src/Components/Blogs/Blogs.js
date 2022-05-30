import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className='mx-5 px-5 mt-5'>
                <div><h1>Difference between Node.js and js</h1></div>
                <hr className='w-75 mx-auto' />
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>Node.js </h4>
                        <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>Javascript </h4>
                        <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
                    </div>
                </div>
            </section>
            <section className='mx-5 px-5 mt-5'>
                <div><h1>Difference between SQL and NoSQL</h1></div>
                <hr className='w-75 mx-auto' />
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>SQL</h4>
                        <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema These databases are not suited for hierarchical data storage.These databases are best suited for complex queries Vertically Scalable Follows ACID property</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>NoSQL</h4>
                        <p>Non-relational or distributed database system.They have dynamic schema These databases are best suited for hierarchical data storage. These databases are not so good for complex queries Horizontally scalable Follows CAP(consistency, availability, partition tolerance).</p>
                    </div>
                </div>
            </section>
            <section className='mx-5 px-5 mt-5'>
                <div><h1>What is JWT ??</h1></div>
                <hr className='w-75 mx-auto' />
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <h4>How it works ?? </h4>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </section>
        </div>
    );
};

export default Blogs;