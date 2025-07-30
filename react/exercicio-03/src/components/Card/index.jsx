import React, { useState } from "react";
import styles from './styles.module.css'
import Avatar from '../../assets/avatar.jpg'
import Title from '../Title'
import ProfileSection from './ProfileSection'
import LinkButton from '../LinkButton'

export default function Card(props) {
    // [valor, funçãoModificadora] 
    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Você agora está seguindo!");
        setFollowText("Following");
    }

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={Avatar} alt="Rafael Rodrigues" />
            <Title>
                <span>{props.title}</span>
                <button 
                    className={styles.followButton}
                    onClick={handleClick}>
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href="https://github.com/Rafaelbrk75">GitHub</LinkButton>
                <LinkButton href="https://www.linkedin.com/in/rafael-rodrigues-aa4590304/">Linkedin</LinkButton>
                <LinkButton href="https://instagram.com/rafaeldoc3">Instagram</LinkButton>
            </ProfileSection>
        </div>
    )
}
