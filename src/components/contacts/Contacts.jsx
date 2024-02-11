import './contacts.scss';

const Contacts = () => {
    return ( 
        <main className='contacts'>
            <ul className='contacts__list'>
                <li className="contacts__list-item"><a className='contacts__list-link' href="#"><i className="fa-brands fa-telegram fa-2xl" style={{"color":"#74C0FC"}}></i></a>Telegram</li>
                <li className="contacts__list-item"><a className='contacts__list-link' href="#"><i className="fa-brands fa-telegram fa-2xl" style={{"color": "#74C0FC"}}></i></a>Telegram</li>
                <li className="contacts__list-item"><a className='contacts__list-link' href="#"><i className="fa-brands fa-telegram fa-2xl" style={{"color":"#74C0FC"}}></i></a>Telegram</li>
                <li className="contacts__list-item"><a className='contacts__list-link' href="#"><i className="fa-brands fa-telegram fa-2xl" style={{"color":"#74C0FC"}}></i></a>Telegram</li>
            </ul>
        </main>
    )
}

export default Contacts