import React from 'react';
import classes from "./AdminStudentsBottom.module.css";
import { Link } from 'react-router-dom';

const AdminStudentsBottom = () => {
  return (
    <div className={classes.container}>
        <div className={classes.heading}>
            <h3>Recent Students</h3>
            <span className={classes.registerButton}><Link to="/admin/register">Register User</Link></span>
        </div>
        <div className={classes.information}>
            <table>
                <thead>
                    <th>Course Name</th>
                    <th>Start</th>
                    <th>Duration</th>
                    <th>Level</th>
                    <th>Admission Status</th>
                    <th>Settings</th>
                </thead>

                <tbody>
                    <tr>
                        <td>Anita Maxwell</td>
                        <td>2023/05/19</td>
                        <td>3 months</td>
                        <td>Web Dev</td>
                        <td>Ongoing</td>
                        <td><span className={classes.edit}>Edit</span></td>
                    </tr>

                    <tr>
                        <td>Anita Maxwell</td>
                        <td>2023/05/19</td>
                        <td>3 months</td>
                        <td>Web Dev</td>
                        <td>Ongoing</td>
                        <td><span className={classes.edit}>Edit</span></td>
                    </tr>

                    <tr>
                        <td>Anita Maxwell</td>
                        <td>2023/05/19</td>
                        <td>3 months</td>
                        <td>Web Dev</td>
                        <td>Ongoing</td>
                        <td><span className={classes.edit}>Edit</span></td>
                    </tr>

                    <tr>
                        <td>Anita Maxwell</td>
                        <td>2023/05/19</td>
                        <td>3 months</td>
                        <td>Web Dev</td>
                        <td>Ongoing</td>
                        <td><span className={classes.edit}>Edit</span></td>
                    </tr>

                    <tr>
                        <td>Anita Maxwell</td>
                        <td>2023/05/19</td>
                        <td>3 months</td>
                        <td>Web Dev</td>
                        <td>Ongoing</td>
                        <td><span className={classes.edit}>Edit</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default AdminStudentsBottom
