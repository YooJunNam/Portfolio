import React from "react";
import "../CSS/Skills.css";

function Skills() {
  return (
    <>
      <section style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <h2
            style={{
              color: "rgba(142,142,142)",
              marginBottom: "50px",
            }}
          >
            Skills
          </h2>
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "100px",
            marginTop: "20px",
          }}
        >
          <img
            className="hoverImg"
            width="130px"
            src="https://images.velog.io/images/goodlana/post/2152a098-9455-4801-bb88-212ba96d21db/html.png"
            alt="html5"
          />

          <img
            className="hoverImg"
            width="130px"
            src="https://images.velog.io/images/goodlana/post/87008434-fac0-4fb9-898d-35c3fd5ac8fa/css.png"
            alt="css3"
          ></img>

          <img
            className="hoverImg"
            width="130px"
            src="https://jeremyrajan.gallerycdn.vsassets.io/extensions/jeremyrajan/vscode-lebab/1.0.5/1573319221126/Microsoft.VisualStudio.Services.Icons.Default"
            alt="es6"
          ></img>
        </div>
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <img
            className="hoverImg"
            width="130px"
            src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/square_256/react.png"
            alt="react"
          ></img>

          <img
            className="hoverImg"
            width="130px"
            alt="git"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
          ></img>

          <img
            className="hoverImg"
            width="130px"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhgSFRUSGRgZFRgZGhgZGRoYHB0hGB4aIR4ZGhocIS4lHB4rHxgYJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NjQ2NDQxNDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ8BPAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBQYIBAH/xABKEAACAQMABgQGDQoHAAMAAAABAgADBBEFBgcSITFBUWFxEyIygZGxFDRCUlRyc5KTobLB0iUzU2R0gpSz0eMXIyQ1YuHwFUOD/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAgEQACAgICAwEBAAAAAAAAAAAAAQIRAxIhMRMiUUEy/9oADAMBAAIRAxEAPwCZoiIAiIgCIiAIiIAiIgCIiAIiWq5wjHsPqgEW6/7QqlOo1raMFK5V6uMnPSqZ4cOuR42n7tjk3V3k9VaoB6A2JiPClzvtxLHeJ7W4k+kyoGehRSO8UkZUabuvhV39NU/FKhpq6+FXf01T8Uxe9Kg4/wDAxRSMqNN3Xwq7+mqfilY01c/Cbv6ap+KYkOP/AAMrDjt9BmUUjKjTVz8Juvpqn4p9Gmbn4TdfTVPxTFq45ZGerplwGZRRkhpm5+E3X01T8Uzeg9drm2cb1R6qZG8rsWOOxjxBmqAyrMxoOKfaOjdF3yXFFa1M5VhkdY6we0HI809s0LZJVLWlQHktcgedEPrJm+zm1TPJKOsmj7ERMJEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEs3XkN8VvUZelm68hvit6jAOT6R8UdwlwGWKR8Udwl0Ges6pm9bJUVtJAEAjwL8CMjo65OPsKl+jp/NX+kg7ZAfymPkX+6TzPPk/oiXZ5/YVL9HT+av9J99h0/0dP5q/0nP+mtZr5bquq3lyqrWcBQ/AAHgBwlihrfpBDlbyueOfHIcegjlGjNUGyeb/V+1rqVqUKTZ/4gH6pE2vupvsArWoljQZt0g8SjdAz0qePdiSLqDrE+kLTwlVVFRWKMVGFbHugDyz1T7tFUHRdxkDggI7wy4MxNp0IycZUQSDKgZbUyoGdT1JkvbH/alb9pP8ulJAkfbHj/AKWv+0n+XSkgzjLs8uT+mfYiJhAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAlm68hvit6jL0s3XkN8VvUYByVTPijuEuAyzTPAdwlYM9haZv2x4/lMfI1Puk9mQHsdP5THyNT7pPk82T+jJdkL6U2ZXtS4q1FahuvUZhknOCeGZZpbKr0kBqluozxPFseabZe7VrSjVekaNySjlSQqYJXq8blKKe12yJ40rpR17in1NNuRqlI2nVTV9NH2woISxyWdj7pjzPYJoW07XCnVQ2FBg3jA1mHIbhBCDrORx6t2SHoDWG3v0L29TfAOGBBVlPUVYAzXdedSaV1RerRRUrqpYFQFD44lWA6Tg4PXJT55Mi1tbIUBlYMsg/9ysGdT1JkwbGz/pK/7Sf5dKSHI82Ne1K/7Sf5dKSHOMuzyz/pn2IiYSIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJZuvzb/Fb1GXpZuvzb/Fb1GAcjIeA7pWDLKngO6XAZ7Skzf9jZ/KY+RqfdJ+kAbGT+Ux8g/wB0n+ebL/RjOXNYD/rLj5d/XPCDJ0vNltlVqPVZq287lzhsDJlCbJrAHia5/fIlrJGilJGobG9/2fU3c7ngfH6ufi5k3zFaC0Db2NPwdBAoJyTzJPWT0zy63axU9H2zVXI3yCKaZ4u3QAOoZBJ6BOTez4JbtkB6ZULdV1XgBWfGPjGeQGUM5Zizc2Yse8nJhTO1HoTJl2Me1K/7Sf5dKSJI62L+1K/7Sf5dKSLOEuzhP+mfYiJhIiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAlm6/Nv8VvUZelFRMqR1gj0wDj9TwEqBmS1l0M9jdVLZwRusdw++UnxWB6eGPPmYsGe1coI2HU/WJtHXPskUw53GTdLbvldOZvg20VPglP6Q/wBJEgMrBkyxpu2aSz/jPU+CJ9IfwwNstX4JT+kP4ZFAMqBk+OJVIku+2vXbrilRt6efdNvOR3DIHpmjaQ0lWuqhq16j1HPSxyFHUi8lHYJ4AZWDCgl0akkXQZcBlgGXFmlpkz7F/alf9pP8ulJGmnbMdDvaWA3xh6rmqVPMbwUKD27qrNxnmfZxk7Z9iImGCIiAIiIAiIgCIiAIiIAiIgHyJHN7tXtqNV6TUKxKOyk5XjunGZZ/xhtf0Fb0rK1l8K0l8JMiRn/jDa/oK3pWXbfa9ZscPTrIOvAb1RrL4bpL4SRExehtOW94m/QqK46QDxHYR0TKSSBERAEREAREQBERANf1o1TttJIFrp4yg7tReDLnqPSOwyPqmxJcndvWA6AaAJ9PhBmTBEqM5Lpgh/8AwT/Xz/D/ANyff8E/14/w/wDckvzyaQ0hSt0NSq6IgGSScejrm+Sf0EVjYp+vH+H/ALk+jYt+vH+H/uSWbesHRXXkwBHcZdjyS+m2yIxsY/Xj/D/3J9Gxn9eP8P8A3JLcR5JfRbIlGxr9eP0H9ybBq7s0trVhUqMa7qQV3lCqCOncycnvM3qJjk2LYAn2fJ4LXS1GrVeglRWdAC4U53c9ZHTJMMhERAEREAREQBERAEREAREQBERAOVtZfblx8s/2jMpq1qVc6RpNWobm6rlDvMAchVbl1YcTF6y+3Lj5Z/tGS9sO9oVv2pv5dKeiTajaPVOTStGlHZVpD3tL56/1mF0/qbeWKeErUvEzjeUhgM8t4jyfPOmZq+0G9pUtHVxVK+PTKKpwSzHAXA6cHB7MSFkdnJZZNkA6u6bqWNwtemxGCN5ehl6VI6eE6esrkVaaVF5OqsP3hmcn00LEKoySQAOsnkJ1NoC1NG1o0mzlaag568cRGVdG5UuDJRMfpnS9GzotWrMFUeknqA6TIg03tcuHYi2RKa54Mw33Pac+KO7EhRb6OcYuXRN8TnJNo+kwc+yCewpTI9G7Ns1b2uNvBLxFweHhEGCO1l5HzYmvG0U8ckTFEsW1wtRFqIQysAVYcQQemVVaqopZiFUAkk8AAOkmQcy5EiTWba3usadkisBkeFfOD2onDhz4n0TTqm0jSbHPsjHYEpgfZlrG2dFjkzoyJBmhtrV1TYC4VKqZGSBuMB1gjh9UmDQOm6N9RFeg28p5g8Cp6VYdBmOLXZMotdnzWO/a2s61woBanSdwDyJUdM5s05p65vXNS4qM/UvJV+KvIeuSFtN1yuaVxWsF8F4JqYU5XLYcHPHPORVOkI0rO2KPFs6t0N7WpfJp6hPbIK0DtJvWq0bf/J3SyJ5HHGQOuSjrhrZR0bSDP4ztkJTB4tjmSehR1zm4tOjk4NOjZInP+kdqekKhO41KkOpUB+t8meKltJ0mpz7Iz2FKZH2ZXjZXiZ0bEibVLasalRaN4iLvEAVUyBk++X7xN1160zUs7B7mju76lMbwyMMwHqMlxadEOLTpkebVtbrqndPZU33KYVSSmQ7bygkFugceiXdhpzUuSfer65HOntNVL6u1xV3d5goO6MDxQAOHmnr1Z1quNHFzQ3PHAB3l3uXVOrj60ju4etI6diaXqNrHXvNH1Lmrub6tUC7q4HiKCMjPHjI4fatpAEj/ACOBI8j/ALnJRbOKg26J7iQ3rNtPrJTpUrc0/CGhTatVxkB2UFkRTw4E8zn6pjNVtoGkql1To76Vd91XddABxPE7ygETdHVm+N1ZO8TUNeddqejVCgeErOCVTOAB75z0DqHTgyKb3afpGocrUSmPeoi+tgTMUGzI42+ToWJzpR2k6TU59kBuwohH2Zv2pO00XVQW1yqo7HCOuQrHqYHyT25xNcGjXjaVkmxLN1UKozDmFJHmEgcbWNIY/wDo5e8/7mKLfRMYuXRP0SLdZtqHsdEpUAlSsUU1HOdxSRyAHNvqHbNFO0jSZbe9kdOcblPHdjdmqDZSxSZ0ZEirU3al4Z1oXiqrMQFqrwUk9DL0d4kqyXFrsiUXF8nK+snt24+Wf7RlFhpq5t1KUazopbeIU4BOAM+gD0SvWT27cfLP9oyR9k+rNpeWdSpcUEd1uGUMSwIG5TOOBHSxPnnobSjyeqTSVsj460Xvwmt86eC8vatY71So7n/kxPo6p0QdnujPglP5z/imI01stsqtNhQU0amPFYMzLnqZWJ4dxkKcfhCyR+Gi7LqWj/DrUuKmK4b/AC0cYTPQd7GC3ZJ6nJVzQam7U24MjFT3gyfdlWnXu7HdqMWei24SeZXHi57eBHmEzIv0nLH9I12qawtdXrUQf8ugxQDoLDym9OR3CU7OtTBpF2qVSRQpkBsHBdjyUHoHWZqOkHLVqjNzLsT6TJ42QUwujFI6ajk9/CVL1jwXJ6x4MhcbP9HPT3PY1NeGN5eDd+9IQ111abR1yaRJZGG9TbrXqPaPvnTJkTbc6S+Dtn90HdfMRk/WBIhJ3Rzxyd0eTYvrC2+9hUbKlTUp56CMBlHYRxx2Hrnu20awMiJZI2PCDeqY96OSnvPHzTQdnDkaVtiPfsPMUfM921lidKVM9CIB3YlarYvVbmE1U0C+kLpLZTgHLO3vVXmfUB2kSdbLZ9o+nTCG3Rzjiz8WPbmaLsLpg1rpvdBKQHcxfP2VkzSckndE5ZO6IE2lakLo8rcUM+Bdt0qeJViCRx96QD6JjdnOsDWV6gyfB1WCOvR4xwrY6wfXJe2o0w2ibjPQEYd4dcTni3YhlI5hlI8xlxe0eS4PaPJPW0DVW1e3ub1kJrLQZg28cZUHBxIAM6U1qOdD1ieZtD9ic1mZj6MxPhnQmhdQLAJSrCkd8KjZ3jz4HPpkZbXa7NpR1JOEp01XuK732naTvob2tS+TT1CaFtO1He9IurcZqqgRqfAb6gkgqSQAwyRg8xjq4zGXtyRCXtyalswudGpvi8FMVSw3GqDxQuByJ4A5kp3urdheUSvg6JVgd1kC5GfdKR0znG+s6lBylWm9Nh7l1Kn6+c+Wl5UpHepvUQ9aMyH0qZbjbtM6OFu0yRaex65ZjmvRVcnHBmOOjlJOoauCpYJZXbeFCqoZhld7cOV9GB6JEGgdqF7bsBWYXFPpD4VwOxwOfeDJu0JpaneUEuKRyrDzgjmpHQQZEtl2c57Ls5+2iaKpWmkHoUV3UVEIGc+UoJ+uZjZXq5b3z1luELbiqV4kYyZ5drv+61PiUvsibFsM/OXHxV9ctt6HRt6WSLa6DoWVpVpUFKoVdiCc8Svb3Ccy1fKb4x9c6t0n+YqfJv8AZM5Rq+U3xj65mL9JwvskHZxqGmkKbXNcsKYcoqrwLEAEnPV4wHeDJB0Ds8t7K7F1SZyAhUI/jYJ90Dznp2Y0gmirfHSrMe8u022RKTtkSk7ZC+tmz3SN1d1bnNFt9jujf3cKOCrx/wCIHnzM9qXs2o0qO/e01qVmJypO8qjPADrOOMv66bSadi5t6KCrVXyyTuoh4EA4HjHjxAxjrzwkcXu0XSdw26tbczyWkij0Egt9cpKTRSU2vhv20HUmySyqV6VNKVSmu+N3Chsc1I6ciQxY1SlWm45q6MPMwMzd3ojSVem9zWp3TIil2eqSAAOZAcgn90TAW48dfjL6xLiqVWdIqlV2dU1H3rYseZo59KzlJeU6rHtQfID7E5UXlJxfpGL9JP2Z6h07qn7LuQWQsQicgcc2bsm66wbNrO4pFaVNKLgeKyDAz1MOkTKagKBoy1xy8Cp9c2Oc3J2c3N2cl3ds1Ko9NxhkYqR2iT3s11iWvo5PCuN+mzUiSeJC4Kn5rAeaRJtGQLpS4x0vn6hPHoe7dKZVeW8T9QnZrZHdraKLGsnt24+Wf7RkpbGtI0aVlVWpUpoTcsQGYA48HT44PRwPokY6x27m8rkI/wCef3J98eyY32M/vH+af6Q1tGhJbKjqJtP2o516PzxMZpnXeytqbOa9N2A4IjBmY9AA++c4exn94/zT/SVpYVW4LSqnuRj6hI8a+keJfT7f3JrVXqnm7sx/eOZM+xSxZLOpVPAVKg3e5ARnu4/VND1X2d3d5UU1UehSzlmdSrEdSocEk9fKT5o6yS3pJRpjdRFCqP8A3TGSSqkMklVI5t120a1rpCvTIwPCMy9qvxX6jN92N6y00RrGowUli9PJwDnylyenhnzGbdr7qWmkqQZSEroPEc8iPetjo7ZBWl9A3Nm+7Wo1EweD7p3T1FXHA+YzU1KNGpqcaZ1IzgDJIA7ZAm1nWJLu6WlSYMlEEFhyZieOOvGMZ7TNUq6dunTca5uGTGN01HIPYePEd89+rep13fuAlN1TpqupVAOwkeMewRGKjyxGCi7bM/sd0S1a/wDZBB3KCMc9G+43VX5pc+aerbTos07qncgeLUTdJ6AydHeRn0SVtWdAUtH260KQz0ux5sxABY9XIcOgCV6yaCp39u1vVHA8Qw5qw5MJO/tZHk9rIO2YawLY3v8AmHdp1V3GY8lPNWPZnh+9OhadQMAQQQekHInNusepN5Ysd+mzpxxVpqWXHW2B4h7DMXb6buqabiXFdExjdV2AHYBnh5pUoqXKLlBS5TJW2x6xoKAsUYF3ZWqYOd1VyQD1Etu+gyL9VdFtdXlGiozl1LdiqQST2dHnlrRmh7m9qbtKnVqMzcWwxAz0u54KO0mTrs/1KTRtMu5V7hx4zDko96v3nphtRjQbUI1+mS12QLou5UchbuB5lnMpnV+lbIXFCpQPAVKboT1bwIz9c5g0voivaVGpV0ZGU44g4btU8mHaJmJ9ozE+GjpbQt3T9i0Tvpg00wcjjwE1PS+1O2tqr0TSrsyOyEYA4qSOGejh9chTR1ep4SmqmowV1KoN5hwI5KOmS9tH1Ca8b2ZbAeF3Rv0zw38cmGfdY4Y6cDpmapPklwSfJsOrOsFtpmi+9SXxWw1OoFY46Gx1Tz6T2Z6PrA7tI0mPTTYqB3L5P1SDKb3VhVyPD0Kg4cQyHuII4iZG4130jUUo11V3SMHAVT6VUGbo74ZWjT9WYrTdiLa5q0AwYI7KGHusHnJk2Jb3sGpnO74c7vVnA3sfVIu1d1Ru9IOAlNwhPjVXDBB1nePlHsHGdC6vaGp2VultT5KOJPNiebHvm5JKqGWSqiD9rv8AutT4lP7Imd2IVlWrcKSASikAnHAES5tj1cqtVW9pozKVC1N0FipXgCQOS46ZFdKoyneRmU9akg+kTV7RopLaFHVN9VV6FXdYNim4OCDg7p4cJytV8pvjH1yYtkjN/wDHXasr8XdwxB8bepgHBPPisiGpbuWJ3H5n3J6+6ZBU2jMa1bR0ds7/ANrtvk/vMz905VGYcSFJHmEwGzwEaLtgQQfB8j3mbIRmcn2zi/6ZyTWrNUZqjHLOxZj1ljkn0mdAbL9G26aPpVaaoXdc1HwC290qT2HhiRbr1qXWsa7ulN2t2JZHVSQoPuHwPFIJwM8wO/GE0RrFd2YIt67oDzUYI78MCAZ3ftHg7tbR4ZOW0/SSUNG1VZgGqL4NF6SWPHh1AAnzTnu2/OJ8ZfWJt+jNXNI6YqeEqmpuhSfC1QQvxUGMHJx5PnmptaVFYjcfIJHktzHmiNJUIJRVWdRj2p/+A+zOU15TpzQd+LnRqVRwzQwQeYKrgg9vCcyLyk4/0nF2ydNkWsVOrai0ZgKlLIAJxlSeG714m+397ToU2q1GCqoJJJ6pzxeap3NC2oX9Dwjo6ByyBg9MnPlbvED/AJTC32l7iuAtWtWdRyV3YjvwTjPbMcE3aYeNN2mV6w6R9lXdW4/SOWHdyH1CSds11UStYCtVXi9RyvDmowufSrTTtTdRq9/UVmVqdAEFqjKRvDqTPlHtHCdB2VotGmtKmAERQqjqAmylXCNnNLhF/dHUI3B1CVROJ5yncHUI3R1CVRAPk+xEAS3UphhggEdRGZciAeBdE24O8KFAHrFNM+nE9oGOUqiAIiIB8xPFU0Vbsd5qFAnrNNCfSRPdEAt06SqMKqqOoAAegS5EQBLFxapUG66Iw6mUMPQZfiAeahYUqfkU6afFVV9QnpiIBZrW6uMMqMOpgGH1zzJoi3U5FCgD1imgPqnuiBZ8UAcpVEQD4RPEdFW5beNChvc8+DXPpxPdEAoVQBgAAdQn3cHUJVEA+T7EQClgDwM8f/xVvvb3gKG9zz4Nc+nE90QCnGI3R1CVRAPNffmn+I3qM5MXlOs70E0nA5lW9RnNS6oXmPzQ5e/T8U643VnfC0rJ71BH5MtfkV++ZU6LoFt40aO9nO9uLnPXnEx2pVu1LR1tTcYZaSgjIODx6RwmenN9s4t8s+AYlURMMP/Z"
            alt="bootstrap"
          ></img>
        </div>
      </section>
    </>
  );
}

export default Skills;
