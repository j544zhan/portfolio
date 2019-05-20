import React from "react";
import Header from "../shared/Header";
import Head from 'next/head';

const BaseLayout = props => {
  const { className, children, isAuthenticated, user, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Allison Zhang Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Allison Zhang and I am a student from University of Waterloo. I am currently enrolled in 4th year of Computing and Financial Management Program, which is a joint degree of both Computer Science and Accounting and Financial Management programs." />
        <meta name="keywords" content="allison portfolio, allison developer, allison programming"/>
        <meta property="og:title" content="Allison Zhang - student, programmer, developer" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Allison Zhang and I am a student from University of Waterloo."/>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
