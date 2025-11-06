import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
     intro:'',
     tag:'Satisfied'
     
    },
    {img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
     intro:'',
     tag:'Underserved'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
     intro:'',
     tag:'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
