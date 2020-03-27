import React from 'react';
import Pageloader from '../../Components/All Sections/Sections/Pageloader/pageloader';
import Section1 from '../../Components/All Sections/Sections/Section1/section1';
import Section2 from '../../Components/All Sections/Sections/Section2/section2';
import Section3 from '../../Components/All Sections/Sections/Section3/Section3';
export default function mainpage() {
    return (
        <div>
            <Section1/>
            <Pageloader/>
            <Section2/>
            <Section3/>
        </div>
    )
}
