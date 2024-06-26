import '../profilePage/profile.css'
import { useLocation, useNavigate } from "react-router-dom";
import UserAccountData from "./UserProfileHook.jsx";

export default function UserProfile(props){
    
    const navigate = useNavigate();
    const location = useLocation();
    const { passDets } = location.state;
    const {accountData, profile, loading} = UserAccountData(passDets.account_name, passDets.location);
    console.log("wtf", accountData);
    console.log(profile) 
    console.log("hey", passDets.account_name);
    
    // Can buy via users profile,
    // must navigate back to the users profile (book details)
    // name of the seller in the book details should not be allowed to navigate back to the user

    return(
        <>
            <div className="container">
                <div className="background">
                    <div className="Pfp">
                        <img className="pfpimg" src={profile.profile}/>
                        <div className="username user-label">
                            <p>{passDets.account_name}</p>
                            <p>|</p>
                            <a href="https://www.facebook.com/kentward.maratas.7" target="_blank">
                                <img src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt="" style={{marginTop: "5px"}}/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="User-Account">
                    <div className="choices">
                        <span>Items On Sale</span> 
                        <span id="totalitems"></span> 
                    </div>
                    <hr className="Hr"/>

                    <div className="ItemSale">
                        {loading ? (
                            <div>Loading...</div>
                            ) : (
                            accountData.map(book => (
                                <div key={book.id} className="on-sale">
                                    <div className="quantity-onsale">Quantity: {book.book_quantity}</div>
                                    <div className="genre-onsale">{book.book_genre}</div>
                                    <div className="sell">
                                        <button className="sell-button" onClick={
                                            () => navigate(`/books/${book.book_title}?Details`, {state: {book}})}>View Item</button>
                                    </div>
                                    <div className="on-sale-image">
                                        <img src={book.imagetag} alt="Book Image" />
                                    </div>
                                    <div className="on-sale-text">
                                        <hr />
                                        <span>{book.book_title}</span>
                                        <span>₱{book.book_price}.00</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div style={{marginBottom: "150px"}}></div>
            <a href="Post.html" target="_blank"><button id="PostBox">POST ITEM</button></a>
        </>
    );
}