import React from 'react'
import './PollsTable.css'

const PollsTable = ({ poll }) => {
    return (
        <div className='PollsTable'>

            {poll.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Created At</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {poll.map((poll, index) => (
                            <tr key={index}>
                                <td style={{ width: "30%", textAlign: "start" }}>{poll.title}</td>
                                <td style={{ width: "30%" }}>
                                    <a href={poll.url} target="_blank" rel="noopener noreferrer">
                                        {poll.url}
                                    </a>
                                </td>
                                <td>{poll.created_at}</td>
                                <td>{poll.author}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default PollsTable