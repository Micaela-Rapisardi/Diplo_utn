import "@/styles/nosotros.css";

export const metadata = {
  title: "B&DM Abogados",
  description: "Servicios legales",
};

export default function Nosotros() {

  return (
    <main className="holder">
        <div class="historia">
            <h3>Historia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quod fugit officia dignissimos quis tempore exercitationem hic enim vitae ut. Porro iusto, aliquid facere officiis delectus sequi nulla temporibus dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, mollitia vero explicabo doloremque quidem rem cum assumenda accusantium vitae facilis ipsum blanditiis itaque magnam saepe delectus sequi ex! Aspernatur, necessitatibus.</p>
        </div>
        <div class="staff">
            <h3>Staff</h3>
            <div class="personas">
                <div class="persona">
                    <img src="img/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Abogado</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate enim quae consequatur sequi necessitatibus possimus veritatis recusandae, inventore placeat laborum, deleniti sint deserunt, unde repellendus impedit. Velit cum eum illum?</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros2.jpg" alt="Pedro Fernandez"/>
                    <h5>Pedro Fernandez</h5>
                    <h6>Abogado</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate enim quae consequatur sequi necessitatibus possimus veritatis recusandae, inventore placeat laborum, deleniti sint deserunt, unde repellendus impedit. Velit cum eum illum?</p>
                </div>
            </div>
        </div>
    </main>
  )
}