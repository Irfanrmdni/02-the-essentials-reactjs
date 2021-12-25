// ? menggunakan instalasi babel dan preset react

// ? membuat time dengan setInterval
// function tick() {
//     const root = document.getElementById('root');

//     const element = (
//         <>
//             <h1>jam sekarang</h1>
//             <h1>{new Date().toLocaleTimeString()}</h1>
//         </>
//     );

//     ReactDOM.render(element, root);
// }

// setInterval(function () {
//     tick();
// }, 1000)

// ? Basic style React element (inline style)
// const root = document.getElementById('root');

// const element = (
//     <div style={{
//         fontFamily: 'gotham',
//         fontSize: '1.5rem',
//         textAlign: 'center',
//         backgroundColor: 'rebeccapurple',
//         color: 'white',
//         padding: '1rem',
//     }}>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quia?
//     </div>
// );

// ReactDOM.render(element, root);

// ? External stylesheet React
// const root = document.getElementById('root');

// * cara 1
// const element = (
//     <div className="container">
//         <h1 className="judul">Judul</h1>
//         <p className="paragraf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus ipsam optio culpa beatae sed?</p>
//     </div>
// );

// * cara 2
// const box = 'box';
// const element = <div className={box}></div>;

// ReactDOM.render(element, root);

// ? Event handling
// const root = document.getElementById('root');

// function btnHandler() {
//     alert('tombol di klik');
// }

// ! onClick={btnHandler()}>click me</button>; ini akan langsung dijalankan
// const element = <button className="btn" onClick={btnHandler}>Click Me</button>;

// ReactDOM.render(element, root);

// ? membuat event klik button. dengan memakai parameter
// const root = document.getElementById('root');

// function clickHandler(nama) {
//     alert('hello. ' + nama);
// }

// * jika ada parameter kita bungkus function nya dengan function lagi
// const element = <button className="btn" onClick={function () {
//     clickHandler('zihan dan irfan');
// }} >click Me</button>;

// * atau kita gunakan dengan cara menambahkan nama function.bind(this,isi parameter)
// const element = <button
//     onClick={klik.bind(this, 'irfan')}
// >click me</button>;

// ReactDOM.render(element, root);

// ? Component and state (State hooks)
// ? membuat react component untuk membuat counter bertambah/berkurang dengan button event
// const root = document.getElementById('root');

// function App() {
// * cara 1 mengambil state
// const state = React.useState(0);
// let count = state[0];
// let updateCount = state[1];

// * cara 2 mengambil state dengan destructuring
//     let [count, updateCount] = React.useState(0);

//     return (
//         <>
//             <button onClick={function () {
//                 updateCount(count--);
//             }}>-</button>

//             <span>{count}</span>

//             <button onClick={function () {
//                 updateCount(count++);
//             }}>+</button>
//         </>
//     );
// }

// * cara 1
// ReactDOM.render(App(), root);
// * cara 2
// ReactDOM.render(<App />, root);

// ? Component lifecycle (Effect hooks)
// const root = document.getElementById('root');

// ! cara yang tidak tepat. dan akan menghasilkan nilai null. karna ada delay pada saat dirender
// ! jadi ini yang pertama dijalankan yaitu console.log. sedangkan dirender nya belakangan

// function App() {
//     return <h1 id="judul">hello ini judul</h1>
// }

// setTimeout(function () {
//     ReactDOM.render(<App />, root);
// }, 1000)

// console.log(document.getElementById('judul'));

// * cara yang tepat karna function tersebut akan dieksekusi setelah component dirender
// function App() {
//     React.useEffect(function () {
//         console.log(document.getElementById('judul'))
//     });

//     return <h1 id="judul">hello ini judul</h1>;
// }

// setTimeout(function () {
//     ReactDOM.render(<App />, root);
// }, 1000);

// ? component lifecyle dengan menambah 1 state
// const root = document.getElementById('root');

// function App() {
//     const [klik, setklik] = React.useState(false);
//     const [count, setCount] = React.useState(0);

//     // * setiap component dirender fungsi ini akan dieksekusi
//     // React.useEffect(function () {
//     //     console.log(document.getElementById('judul'));
//     // });

//     // * setiap component dirender fungsi ini hanya akan mengeksekusi state klik saja
//     React.useEffect(function () {
//         console.log(document.getElementById('judul'));
//     }, [klik]);

//     return (
//         <>
//             <button onClick={function () {
//                 setklik(true);
//             }}>click me</button>

//             <h1 id="judul">hello ini judul</h1>

//             <button onClick={function () {
//                 setCount(count + 1);
//             }}>tambah</button>

//             nilai saat ini : {count}
//         </>
//     );
// }

// ReactDOM.render(<App />, root);

// ? Component lifecycle (Effect hooks)
// const root = document.getElementById('root');

// function App() {
//     let [klik, setKlik] = React.useState(false);
//     let [count, setCount] = React.useState(0);

//     // * ini akan dirender untuk pertamakali saja / 1x
//     React.useEffect(function () {
//         console.log('exec');
//     }, []);

//     return (
//         <>
//             <button onClick={function () {
//                 setKlik(true);
//             }}>click me</button>

//             <h1 id="judul">ini judul</h1>

//             <button onClick={function () {
//                 setCount(count + 1);
//             }}>tambah</button>

//             nilai saat ini : {count}
//         </>
//     );
// }

// ReactDOM.render(<App />, root);

// ? component lifecycle cleanUp atau destroy ketika meng-init suatu library / component / carousel dll.
// ? agar tidak memakan banyak memory
// const root = document.getElementById('root');

// function App() {
//     let [klik, setKlik] = React.useState(false);

// * yang pertama kali di eksekusi adalah init carousel.
// * ketika ada state yg berubah maka yang pertama kali di eksekusi adalah cleanUp carousel kemudian setelah itu init carousel
//     React.useEffect(function () {
//         console.log('init carousel');

//         return function () {
//             console.log('cleanUp carousel');
//         }
//     });

//     return (
//         <>
//             <button onClick={function () {
//                 setKlik(true);
//             }}>click me</button>
//         </>
//     );
// }

// ReactDOM.render(<App />, root);

// ? Conditional rendering
// const root = document.getElementById('root');

// ? dengan menggunakan if statement
// function App() {
//     let [login, setlogin] = React.useState(false);

// * if statement ketika state dalam keadaan true
// if (login) {
//     return (
//         <>
//             <h1>anda sudah login</h1>
//             <button onClick={function () {
//                 setlogin(false)
//                 alert('logout berhasil')
//             }}>logout</button>
//         </>
//     );
// }

// * ketika state nya dalam keadaan false
//     return (
//         <>
//             <h1>Login dulu bang</h1>
//             <button onClick={function () {
//                 setlogin(true);
//                 alert('login berhasil')
//             }}>login</button>
//         </>);
// }

// ? dengan menggunakan ternary operator
// function App() {
//     let [login, setlogin] = React.useState(false);

// return (
//     <>
//         <h1>Application</h1>
//         <p>{login ? <b>kamu sudah login</b> : <i>kamu belum login</i>}</p>
//         <button onClick={function () {
//             setlogin(true);
//         }}>login</button>
//     </>
// );

// * ternary operator hanya mengambil true nya saja
// return (
//     <>
//         <h1>Application</h1>
//         <p>{login ? <b>kamu sudah login</b> : ''}</p>
//         <button onClick={function () {
//             setlogin(true);
//         }}>login</button>
//     </>
// );
// }

// ReactDOM.render(<App />, root);

// ? DOM manipulation (Ref hooks)
// const root = document.getElementById('root');

// * menangkap element h1 judul dan mengubah isi text nya
// function App() {
//     React.useEffect(function () {
//         const judul = document.getElementById('judul');
//         setTimeout(function () {
//             judul.textContent = "aplikasi";
//         }, 1000)

//     }, []);

//     return (
//         <h1 id="judul">Application</h1>
//     );
// }

// * menangkap element h1 judul dan mengubah isi text nya dengan menggunakan React.useRef
// function App() {
//     const judulRef = React.useRef(null);

//     React.useEffect(function () {
//         setTimeout(function () {
//             judulRef.current.textContent = "aplikasi";
//         }, 1000)
//     }, []);

//     return (
//         <h1 ref={judulRef}>Application</h1>
//     );
// }

// ? React list & keys (render multiple components)
// const root = document.getElementById('root');

// function App() {
//     const fruits = ['apel', 'anggur', 'jeruk', 'manggis'];

//     return (
//         <ul>
//             {fruits.map(function (fruit) {
//                 return <li key={fruit}>{fruit}</li>
//             })}
//         </ul>
//     );
// };

// ReactDOM.render(<App />, root);

// ? Forms
// const root = document.getElementById('root');

// * dengan menggunakan React.useRef
// function App() {
//     const namaRef = React.useRef(null);

//     function ketikaSubmit(event) {
//         event.preventDefault();
//         const nama = namaRef.current.value;

//         console.log('nama: ', nama);
//     }

//     return (
//         <form onSubmit={ketikaSubmit}>
//             <label>Nama</label>
//             <input type="text" id="name" ref={namaRef} />
//             <button type="submit">kirim</button>
//         </form>
//     );
// }

// * dengan menggunakan React.useState
// function App() {
//     const [nama, setNama] = React.useState('');

//     function ketikaChanges(event) {
//         setNama(event.target.value);
//     }

//     function ketikaSubmit(event) {
//         event.preventDefault();
//         console.log('nama: ', nama);
//     }

//     return (
//         <form onSubmit={ketikaSubmit}>
//             <label>Nama</label>
//             <input type="text" id="name" onChange={ketikaChanges} />
//             <button type="submit">kirim</button>
//         </form>
//     );
// }

// ReactDOM.render(<App />, root);

// ? Data fetching (HTTP client request)
// const root = document.getElementById('root');

// function App() {
//     const [news, setNews] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(function () {
// * dengan menggunakan fetch data
// const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         setNews(response);
//         setLoading(false);
//     });

// * dengan menggunakan async await
// async function getData() {
//     const data = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
//     const resData = await data.json();
//     setNews(resData);
//     setLoading(false);
// }

// getData();

//     }, []);

//     return (
//         <>
//             <h1>Data Fetch</h1>
//             {
//                 !loading ? <ul>
//                     {news.map(function (item) {
//                         console.log(item);
//                         return <li key={item.id}>{item.title}</li>
//                     })}

//                 </ul> : <i>loading data....</i>
//             }
//         </>
//     );
// }

// ReactDOM.render(<App />, root);

// ? The final project (todo list app)
const root = document.getElementById('root');

function App() {
    // * state
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [message, setMessage] = React.useState('');

    // * membuat random id
    function generateID() {
        return Date.now();
    }

    // * add & save todo
    function saveTodo(event) {
        event.preventDefault();

        if (!activity) {
            return setMessage('activity masih kosong');
        }

        // * set message
        setMessage('');

        // * edit todo
        if (edit.id) {
            const updateTodo = {
                id: edit.id,
                ...edit,
                activity: activity,
            }

            const editTodoIndex = todos.findIndex(function (todo) {
                return todo.id == edit.id;
            })

            const updateTodos = [...todos];

            updateTodos[editTodoIndex] = updateTodo;

            setTodos(updateTodos);

            return cancelEdit();
        }

        setTodos([...todos, {
            id: generateID(),
            activity: activity,
            done: false,
        }]);

        // * clear activity / inputan
        setActivity('');
    }

    // * hapus todo
    function hapusTodo(todoID) {
        const tanya = confirm('ingin dihapus ?');

        if (tanya == true) {
            const filterTodos = todos.filter(function (todo) {
                return todo.id !== todoID;
            });

            setTodos(filterTodos);

            if (edit.id) {
                cancelEdit();
            }
        }
    }

    // * inputan
    function ketikaChange(event) {
        setActivity(event.target.value);
    }

    // * edit todo
    function editTodo(todo) {
        setActivity(todo.activity);
        setEdit(todo);
    }

    // * cancel edit
    function cancelEdit() {
        setEdit({});
        setActivity('');
    }

    // * done handler
    function doneToDoHandler(todo) {
        const updateTodo = {
            ...todo,
            done: todo.done ? false : true,
        }

        const editTodoIndex = todos.findIndex(function (currentTodo) {
            return currentTodo.id == todo.id;
        })

        const updateTodos = [...todos];

        updateTodos[editTodoIndex] = updateTodo;

        setTodos(updateTodos);
    }

    return (
        <>
            <h1>Simple To Do List</h1>

            {message && <p style={{ color: 'red' }}>{message}</p>}

            <form onSubmit={saveTodo}>
                <input type="text" value={activity} onChange={ketikaChange} placeholder="masukan activity..." />
                <button type="submit">{edit.id ? 'simpan perubahan' : 'tambah'}</button>
                {edit.id ? <button onClick={cancelEdit}>batal edit</button> : ''}
            </form>

            {todos.length > 0 ?
                <ul>
                    {todos.map(function (todo) {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.done} onChange={doneToDoHandler.bind(this, todo)} />
                                {todo.activity}
                                ({todo.done ? 'Selesai' : 'Belum selesai'})
                                <button onClick={editTodo.bind(this, todo)}>Edit</button>
                                <button onClick={hapusTodo.bind(this, todo.id)}>hapus</button>
                            </li>
                        );
                    })}
                </ul>
                : (<p>tidak ada todo</p>)
            }
        </>
    );
}

ReactDOM.render(<App />, root);

