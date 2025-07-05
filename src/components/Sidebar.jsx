import { sideMenuBarOptions } from "../util/data"

function Sidebar() {
    return (
        <div>

            <div className="offcanvas offcanvas-start bg-dark text-white" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Shraddha Portfolio</h5>
                    <button type="button" className="btn-close btn btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className="">
                            {sideMenuBarOptions.map((menu) => (
                                <li key={menu.id} className="flex d-flex p-3 justify-content-start menu" style={{ "hover" : "bg-light text-white"}}>
                                    <span className="icon-link icon-link-hover" style={{ "--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}>
                                        <i className={`${menu.icon} px-4`}></i>{menu.name}
                                    </span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
