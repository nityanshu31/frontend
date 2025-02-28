import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const VolunteerHome = () => {
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We will contact you at ${formData.email}.`);
        setShowForm(false); // Hide the form after submission
        setFormData({ name: "", email: "", phone: "", interest: "" }); // Reset form
    };

    // Updated styles for the Explore More Section
    const styles = {
        exploreMoreContainer: {
            padding: "40px 16px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginBottom: "40px",
        },
        exploreMoreTitle: {
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "24px",
        },
        exploreMore: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Adjusted for larger cards
            gap: "24px", // Increased gap for better spacing
        },
        exploreMoreLink: {
            textDecoration: "none",
            color: "inherit",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px", // Increased gap for better spacing
            padding: "20px", // Increased padding for larger cards
            backgroundColor: "#f8fafb",
            
            borderRadius: "16px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Added box-shadow transition
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)", // Added subtle shadow
        },
        cardIcon: {
            width: "250px", // Increased image size
            height: "200px", // Increased image size
            borderRadius: "12px", // Rounded corners for images
            objectFit: "cover", // Ensure images cover the area
            transition: "transform 0.3s ease", // Added hover effect
        },

    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f8fafb",
                fontFamily: "Public Sans, Noto Sans, sans-serif",
                overflowX: "hidden",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}
          
                
                
            

            {/* Main Content */}
            <main
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    width: "100%", // Ensure the main content takes full width
                }}
            >
                <div
                    style={{
                        width: "100%", // Ensure the container takes full width
                        maxWidth: "none", // Remove max-width to allow full expansion
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        padding: "40px 24px", // Add padding for better spacing
                    }}
                >
                    {/* Hero Section */}
                    <section
                        style={{
                            minHeight: "600px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: "24px",
                            padding: "40px",
                            borderRadius: "16px",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1594502245633-864a6be8fc79?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%", // Ensure hero section takes full width
                        }}
                    >
                        <h1 style={{ color: "white", fontSize: "48px", fontWeight: "900", margin: 0 }}>
                            Volunteer to protect
                        </h1>
                        <p className="font-lg" style={{ color: "white", fontSize: "25px", margin: 0 }}>
                        "Join Hands. Take Action. Save Lives. Be the Hero the World Needs!" 🌍🚀💙
                        </p>
                        <Link to="/training">
    <button
        style={{
            backgroundColor: "#359de3",
            color: "white",
            padding: "12px 24px",
            borderRadius: "12px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontSize: "16px",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#2a7bb5")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#359de3")}
    >
        Start Your Training
    </button>
</Link>

                    </section>
                    {/* Explore More Section */}
                    <div style={styles.exploreMoreContainer}>
                        <h2 style={styles.exploreMoreTitle}>SERVICES</h2>
                        <div style={styles.exploreMore}>
                            {/* Requests */}
                            <Link to="/requests" style={styles.exploreMoreLink}>
                                <div
                                    style={styles.card}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)"; // Add shadow on hover
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)"; // Reset scale
                                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)"; // Reset shadow
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Requests"
                                        style={styles.cardIcon}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Scale image on hover
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset image scale
                                    />
                                    <h3>REQUESTS</h3>
                                </div>
                            </Link>

                            {/* Hospitality */}
                            <a href="/emergency-hospitality" style={styles.exploreMoreLink}>
                                <div
                                    style={styles.card}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Hospitality"
                                        style={styles.cardIcon}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                                    />
                                    <p>Hospitality</p>
                                </div>
                            </a>

                            {/* Training */}
                            <Link to="/training" style={styles.exploreMoreLink}>
                                <div
                                    style={styles.card}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Training"
                                        style={styles.cardIcon}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                                    />
                                    <h3>TRAINING</h3>
                                </div>
                            </Link>

                            {/* Updates */}
                            <Link to="/updates" style={styles.exploreMoreLink}>
                                <div
                                    style={styles.card}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Updates"
                                        style={styles.cardIcon}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                                    />
                                    <h3>UPDATES</h3>
                                </div>
                            </Link>

                            {/* Task Assign */}
                            <Link to="/task-assign" style={styles.exploreMoreLink}>
                                <div
                                    style={styles.card}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Task Assign"
                                        style={styles.cardIcon}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                                    />
                                    <h3>TASK ASSIGN</h3>
                                </div>
                            </Link>

                            {/* Team Member */}
                            <Link to="/team-member" style={styles.exploreMoreLink}>
                                <div
                                    style={styles.card}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Team Member"
                                        style={styles.cardIcon}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                                    />
                                    <h3>TEAM MEMBER</h3>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <h2 style={{ fontSize: "22px", fontWeight: "bold", padding: "16px 0 0 16px", margin: 0 }}>
                        Current projects
                    </h2>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                            gap: "16px",
                            padding: "16px",
                            width: "100%", // Ensure projects section takes full width
                        }}
                    >
                        {[
                            {
                                title: "Food Distribution",
                                img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                            {
                                title: "First Aid Services",
                                img: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                            {
                                title: "Bootcamps",
                                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                            {
                                title: "Social Awareness",
                                img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            },
                        ].map((project) => (
                            <div
                                key={project.title}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    paddingBottom: "12px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        aspectRatio: "16/9",
                                        backgroundImage: `url('${project.img}')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: "12px",
                                    }}
                                ></div>
                                <p style={{ fontSize: "16px", fontWeight: "500", margin: 0 }}>{project.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials Section */}
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "24px",
                            padding: "40px 16px",
                            backgroundColor: "#ffffff",
                            borderRadius: "25px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            width: "100%", // Ensure testimonials section takes full width
                        }}
                    >
                        <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0, textAlign: "center" }}>
                            What Our Volunteers Say
                        </h2>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            {[
                                {
                                    name: "John Doe",
                                    testimonial:
                                        "Volunteering with this organization has been a life-changing experience. I feel like I'm making a real difference.",
                                    img: "/Images/sam.jpg",
                                },
                                {
                                    name: "John Doe",
                                    testimonial:
                                        "Volunteering with this organization has been a life-changing experience. I feel like I'm making a real difference.",
                                    img: "/Images/paruu.jpg",
                                },
                                {
                                    name: "Jane Smith",
                                    testimonial:
                                        "The team is amazing, and the work we do is so rewarding. I highly recommend volunteering here.",
                                    img: "/Images/kavi.jpg",
                                },
                                {
                                    name: "Alice Johnson",
                                    testimonial:
                                        "I've met so many wonderful people and learned so much. It's been an incredible journey.",
                                    img: "/Images/ricky.jpg",
                                },
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "12px",
                                        textAlign: "center",
                                    }}
                                >
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            borderRadius: "60%",
                                            objectFit: "Square",
                                        }}
                                    />
                                    <p style={{ fontSize: "16px", fontWeight: "500", margin: 0 }}>{testimonial.name}</p>
                                    <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>{testimonial.testimonial}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "24px",
                            padding: "40px 16px",
                            textAlign: "center",
                            width: "100%", // Ensure call-to-action section takes full width
                        }}
                    >
                        <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0, maxWidth: "720px" }}>
                            Ready to make a difference?
                        </h1>
                        <button
                            style={{
                                backgroundColor: "#359de3",
                                color: "white",
                                padding: "12px 24px",
                                borderRadius: "12px",
                                fontWeight: "bold",
                                border: "none",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                                fontSize: "16px",
                            }}
                            onClick={() => setShowForm(true)} // Show form on click
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2a7bb5")}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = "#359de3")}
                        >
                            Get started
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default VolunteerHome;