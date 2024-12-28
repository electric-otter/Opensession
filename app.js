const e = React.createElement;

const OpenSession = () => {
  const headingStyle = {
    color: '#2c3e50',
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    display: 'block',
    margin: '10px auto',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const footerStyle = {
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#7f8c8d',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const [session, setSession] = React.useState(null);
  const [projectName, setProjectName] = React.useState('');
  const [license, setLicense] = React.useState('');

  const handleSessionClick = (sessionType) => {
    setSession(sessionType);
    if (sessionType === 'Design') {
      window.location.href = 'https://www.figma.com';
    }
  };

  const handleCreateProject = () => {
    alert(`Creating project "${projectName}" with license "${license}" in GitHub Codespaces!`);
    window.location.href = 'https://github.com/codespaces';
  };

  return e('div', null,
    e('h1', { style: headingStyle }, 'VMs, storage, and even cloud services are so infuriating, cloud services making you pay, all to have a messy buggy computer-connecting space, not anymore! With OpenSession you have everything in a session.'),
    e('h2', { style: { textAlign: 'center' } }, 'Select a session to start:'),
    e('button', { style: buttonStyle, onClick: () => handleSessionClick('Development') }, 'Development Session'),
    e('button', { style: buttonStyle, onClick: () => handleSessionClick('Design') }, 'Design Session'),
    session === 'Development' && e('div', { style: formStyle },
      e('h3', null, 'New Project'),
      e('input', {
        type: 'text',
        placeholder: 'Project Name',
        value: projectName,
        onChange: (e) => setProjectName(e.target.value),
        style: { marginBottom: '10px', padding: '5px', width: '200px' }
      }),
      e('br'),
      e('select', {
        value: license,
        onChange: (e) => setLicense(e.target.value),
        style: { marginBottom: '10px', padding: '5px', width: '200px' }
      },
        e('option', { value: '' }, 'Select License'),
        e('option', { value: 'MIT' }, 'MIT'),
        e('option', { value: 'GPL' }, 'GPL'),
        e('option', { value: 'Apache' }, 'Apache')
      ),
      e('br'),
      e('button', { style: buttonStyle, onClick: handleCreateProject }, 'Create Project')
    ),
    e('footer', { style: footerStyle }, 'Made with ❤️ and open sourceness')
  );
};

ReactDOM.render(
  e(OpenSession),
  document.getElementById('root')
);
