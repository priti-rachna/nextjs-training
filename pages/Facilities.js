import Link from "next/link";
import React from "react";

const Facilities = ({}) => {
    return (
        <div>
            <h2>This is Facility Page</h2>
        <ul>
            <li><Link href="/Facilities/lab">Lab</Link></li>
            <li><Link href="/Facilities/library">Library</Link></li>
            <li><Link href="/Facilities/playground">Playground</Link></li>
            <li><Link href="/Facilities/sports">Sports</Link></li>
        </ul>
        </div>
    )
}

export default Facilities;