import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import HeroLanding from "./pages/LandingPage/HeroLanding";
import HeroSignIn from "./pages/LandingPage/HeroSignIn";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";

function App() {
    const [signedIn, setSignedIn] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    //function that sets the signed in state as true/false
    const handleSignIn = (isSignedIn) => {
        setSignedIn(isSignedIn);

        // if set to false, alert user has logged out
        if (!isSignedIn) {
            alert("User has logged out");
        }
    };

    const handleCart = (isOpen) => {
        setOpenCart(isOpen);
    };

    return (
        <div className="App">
            {/* Header and menu are combined into one component, TopBar */}
            <TopBar signedIn={signedIn} handleCart={handleCart} />

            {/* Routes for navigation: Home / Account or Sign In / About / Shop */}
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<HeroLanding signedIn={signedIn} />}
                />
                {/* Optional route on /signin or /account display account or signing page depending on signIn state */}
                <Route
                    path="/signin?/account?"
                    element={
                        signedIn ? (
                            <Account handleSignIn={handleSignIn} />
                        ) : (
                            <HeroSignIn handleSignIn={handleSignIn} />
                        )
                    }
                />
                <Route path="/shop" element={<Products />} />
                <Route path="/about" element={<About />} />
            </Routes>

            {/** Display shopping cart if openCart is set to open - total can be changed manually for testing purposes */}
            <Cart open={openCart} handleCart={handleCart} total={122} />

            <Footer>&copy; David Lopes</Footer>
        </div>
    );
}

export default App;
