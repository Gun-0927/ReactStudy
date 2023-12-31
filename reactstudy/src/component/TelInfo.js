import React, { Component } from "react";

class TelInfo extends Component {
    static defaultProps = {
        info: {name:'성명',telno: '010-0000-0000',id:0}
    }
    state={
        editing: false,
        name:'',
        telno:''
    }
    handleDelete = () => {
        const {info, onDelete} = this.props;
        onDelete(info.id);
    }
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({editing:!editing});
    }
    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                telno: info.telno
            })
        }
        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                telno: this.state.telno
            });
        }
    }
    render(){
        console.log('TelInfo render()', this.props.info.id);
        const style = {
            border:'1px solid black'
            ,padding:'8px'
            ,margin:'8px'
        };
        const{editing} = this.state

        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.telno}
                            name="telno"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleDelete}>삭제</button>
                </div>
            );
        }

        const {name, telno} = this.props.info;
        return (
            <div style={style}>
            <div><b>{name}</b></div>
            <div>{telno}</div>
            <button onClick={this.handleToggleEdit}>수정</button>
            <button onClick={this.handleDelete}>삭제</button>
            </div>
        );
    }
}
export default TelInfo;