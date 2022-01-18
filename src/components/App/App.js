import React from "react";
import app from "./app.module.css";
import List from "../List/List";
import withLoader from "../../HOC/LoadWrapper/WithLoader";
import Header from "../Header/Header";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      isDone: false,
      importance: "0",
      filterType: 2,
      loading: false,
      timer: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleChangeImportance = this.handleChangeImportance.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.hanldeChangeIsDone = this.hanldeChangeIsDone.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    if (
      this.state.items.some(
        (element) =>
          element.text.toLowerCase() === this.state.text.toLowerCase()
      )
    ) {
      return alert("такой пункт уже есть");
    }

    const newItem = {
      text: this.state.text,
      id: Date.now(),
      isDone: false,
      importance: "0",
      filterType: 2,
    };

    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }

  handleRemoveTodo(id) {
    this.setState({
      items: this.state.items.filter((el) => el.id !== id),
    });
  }

  handleChangeImportance(id, importance) {
    const newArray = this.state.items.map((element) =>
      element.id === id ? { ...element, importance: importance } : element
    );
    this.setState({
      items: newArray,
    });
  }

  hanldeChangeIsDone(id) {
    const newArray = this.state.items.map((element) =>
      element.id === id ? { ...element, isDone: !element.isDone } : element
    );

    this.setState({
      items: newArray,
    });

    this.setState({
      items: newArray,
    });
  }

  handleFilter(e) {
    this.setState({
      filterType: parseInt(e.target.value),
    });
  }

  
  componentDidMount() {
    this.setState({timer: setTimeout(() => {
      this.setState({ loading: true });
    }, 5000)}) ;
  }

  componentWillUnmount() {
    this.setState({timer:clearTimeout(this.state.timer)} ) ;
  }

  render() {

    const HeaderWithLoader = withLoader(Header, this.state.loading);

    return (
      <>
      <div className={app.container}>
        <HeaderWithLoader
          filterType={this.state.filterType}
          handleFilter={this.handleFilter}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          text={this.state.text}
        />
        
          <List
            items={this.state.items}
            handleRemoveTodo={this.handleRemoveTodo}
            changeImportance={this.handleChangeImportance}
            filterType={this.state.filterType}
            changeIsDone={this.hanldeChangeIsDone}
          />
        </div>
      </>
    );
  }
}



export default App;


