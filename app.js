const e = React.createElement;

const OpenSession = () => {
  const headingStyle = {
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  return e('div', null, 
    e('h1', { style: headingStyle }, 'VMs, storage, and even cloud services are so infuriating, cloud services making you pay, all to have a messy buggy computer-connecting space, not anymore! With OpenSession you have everything in a session.')
  );
};

ReactDOM.render(
  e(OpenSession),
  document.getElementById('root')
);
