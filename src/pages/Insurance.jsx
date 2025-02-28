import { useState } from 'react';

function Insurance() {
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const conversionRate = 75; // Example conversion rate from USD to INR

  const plans = [
    {
      name: 'Basic',
      price: (29.99 * conversionRate).toFixed(2), // Convert to INR
      features: ['Personal Liability', 'Property Damage', '24/7 Support'],
      value: 'basic',
      url: 'https://www.licindia.in' // LIC link for Basic plan
    },
    {
      name: 'Premium',
      price: (49.99 * conversionRate).toFixed(2),
      features: ['Everything in Basic', 'Medical Coverage', 'Travel Protection', 'Natural Disaster Coverage'],
      value: 'premium',
      url: 'https://www.licindia.in' // LIC link for Premium plan
    },
    {
      name: 'Enterprise',
      price: (99.99 * conversionRate).toFixed(2), // Convert to INR
      features: ['Everything in Premium', 'Global Coverage', 'VIP Support', 'Custom Claims Handler', 'Family Protection'],
      value: 'enterprise',
      url: 'https://www.licindia.in' // LIC link for Enterprise plan
    }
  ];

  const banks = [
    {
      name: 'CitiBank Insurance',
      features: ['0% EMI for 12 months', 'Instant Approval', 'No Documentation'],
      logo: 'https://imgs.search.brave.com/XIN5oN7TDAzC_XATMXYtMdt4IPLdWYWP-us2GGJPMxg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L0NpdGliYW5rLWxv/Z28tNTAweDMwMC5q/cGc', // Relative path to the logo in the public folder
      link: 'https://www.citibank.com'
    },
    {
      name: 'HDFC ERGO',
      features: ['Wide Range of Plans', 'Cashless Network', 'Easy Claim Process'],
      logo: 'https://pimwp.s3-accelerate.amazonaws.com/2020/11/IMG-20201124-WA0055-777x437-1.jpg', // Relative path to the logo in the public folder
      link: 'https://www.hdfcergo.com'
    },
    {
      name: 'HSBC Assure',
      features: ['Special Corporate Rates', 'Family Discount', 'Global Coverage'],
      logo: 'https://imgs.search.brave.com/BwSt0idzCw1nkQdUjIvzyfhwuf3cyBMSNefhce7-2xI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvSFNCQy1Ib25n/a29uZy1hbmQtU2hh/bmdoYWktQmFua2lu/Zy1Db3Jwb3JhdGlv/bi1Mb2dvLTIwMTgt/cHJlc2VudC03MDB4/Mzk0LmpwZw',
      link: 'https://www.hsbc.com'
    },
    {
      name: 'LIC',
      features: ['Premium Healthcare', 'Investment Benefits', 'Tax Savings'],
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobj-65ZyzrE7AXx-HWLyJQfLD3t40r0Yoww&s', // Relative path to the logo in the public folder
      link: 'https://www.licindia.in'
    },
    {
      name: 'Bajaj Allianz',
      features: ['Comprehensive Coverage', 'Instant Claim Settlement', '24/7 Customer Support'],
      logo: 'https://bl-i.thgim.com/public/money-and-banking/1ycmmb/article54304136.ece/alternates/LANDSCAPE_1200/Bajaj-Allianz-General-InsuranceNew-Logojpg',
      link: 'https://www.bajajallianz.com'
    }


  ];

  const popularPlans = [
    {
      title: 'Family Health Plus',
      description: 'Comprehensive health coverage for the entire family',
      emi: 'EMI starting from $15.99/month'
    },
    {
      title: 'Senior Care Elite',
      description: 'Specialized coverage for seniors with enhanced medical benefits',
      emi: 'EMI starting from $25.99/month'
    },
    {
      title: 'Young Professional Shield',
      description: 'Tailored protection for career-focused individuals',
      emi: 'EMI starting from $19.99/month'
    }
  ];

  const handleChoosePlan = (url) => {
    window.open(url, '_blank'); // Open the LIC website in a new tab
  };

  const handleContactExpert = () => {
    window.location.href = 'mailto:support@insurance.com?subject=Inquiry about Insurance Plans';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', color: '#1e293b', marginBottom: '16px', fontWeight: '700' }}>Choose Your Insurance Plan</h1>
          <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Protect what matters most with our comprehensive insurance plans tailored to your needs.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', padding: '20px' }}>
          {plans.map((plan) => (
            <div key={plan.value} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: selectedPlan === plan.value ? '0 0 30px rgba(59, 130, 246, 0.5)' : '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease', cursor: 'pointer', transform: selectedPlan === plan.value ? 'translateY(-5px)' : 'none', background: selectedPlan === plan.value ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' : 'white' }} onClick={() => setSelectedPlan(plan.value)}>
              <h2 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '16px', fontWeight: '600' }}>{plan.name}</h2>
              <p style={{ fontSize: '36px', color: '#3b82f6', fontWeight: '700', marginBottom: '24px' }}>₹{plan.price}<span style={{ fontSize: '16px', color: '#64748b', fontWeight: 'normal' }}>/month</span></p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {plan.features.map((feature, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#475569', fontSize: '16px' }}>
                    <span style={{ marginRight: '8px', color: '#3b82f6' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button style={{ width: '100%', padding: '16px', marginTop: '24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }} onClick={() => handleChoosePlan(plan.url)}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', color: '#1e293b', textAlign: 'center', marginBottom: '40px', fontWeight: '700' }}>Our Banking Partners</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {banks.map((bank, index) => (
              <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}>
                <a href={bank.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px', textAlign: 'center' }}>
                    <img src={bank.logo} alt={bank.name} style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', color: '#1e293b', marginBottom: '16px', textAlign: 'center' }}>{bank.name}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {bank.features.map((feature, idx) => (
                      <li key={idx} style={{ color: '#64748b', marginBottom: '8px', textAlign: 'center' }}>{feature}</li>
                    ))}
                  </ul>
                  <button style={{ width: '100%', padding: '10px', marginTop: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }} onClick={() => window.open(bank.link, '_blank')}>Visit Now</button>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', color: '#1e293b', textAlign: 'center', marginBottom: '40px', fontWeight: '700' }}>Popular Plans & Benefits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {popularPlans.map((plan, index) => (
              <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
                <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '16px' }}>{plan.title}</h3>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>{plan.description}</p>
                <p style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '600' }}>{plan.emi}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center', padding: '40px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '16px' }}>Need Help Choosing?</h3>
          <p style={{ color: '#64748b', marginBottom: '24px' }}>Our insurance experts are here to help you find the perfect plan.</p>
          <button style={{ padding: '16px 32px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }} onClick={handleContactExpert}>Contact an Expert</button>
        </div>

        <footer style={{ marginTop: '80px', padding: '60px 0', borderTop: '1px solid rgba(0,0,0,0.1)', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderRadius: '16px', boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.1)', color: 'white' }}>
          <div style={{ textAlign: 'center', marginTop: '60px', padding: '20px 0', color: '#cbd5e1' }}>
            <p>© 2025 Insurance Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Insurance;