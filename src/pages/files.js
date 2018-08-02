import React from "react"

export default ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>Files</h1>
            <table>
                <thead>
                <tr>
                    <th>relativePath</th>
                    <th>prettySize</th>
                    <th>extension</th>
                    <th>created</th>
                </tr>
                </thead>
                <tbody>
                {data.allFile.edges.map(({ node }, index) =>
                    <tr key={index}>
                        <td>
                            {node.relativePath}
                        </td>
                        <td>
                            {node.prettySize}
                        </td>
                        <td>
                            {node.extension}
                        </td>
                        <td>
                            {node.birthTime}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export const query = graphql`
    query FilesQuery {
        allFile {
          edges {
            node {
              absolutePath
              relativePath
              birthTime(fromNow: true)
              extension
              name
              prettySize
            }
          }
        }
    }
`
