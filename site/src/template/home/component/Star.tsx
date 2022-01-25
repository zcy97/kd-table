import React, { Component } from 'react'
import { ItemProps } from '../item'
export class Star extends Component<ItemProps> {
  constructor(props: ItemProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <svg viewBox="0 0 80 80" style={this.props.style}>
        <defs>
          <linearGradient x1="-11.3049116%" y1="0%" x2="104.1664%" y2="128.329918%" id="linearGradient-1">
            <stop stopColor="#5F90FF" stopOpacity="0.315696023" offset="0.0655594406%"></stop>
            <stop stopColor="#FFFFFF" stopOpacity="0.4" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="首页" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="画板" transform="translate(-460.000000, -909.000000)">
            <g id="theme" transform="translate(460.000000, 909.000000)">
              <rect id="矩形" x="0" y="0" width="80" height="80"></rect>
              <g id="编组" transform="translate(7.000000, 2.000000)">
                <rect id="矩形备份-6" fill="#3863FF" x="33" y="0" width="32" height="32"></rect>
                <g id="编组-4" transform="translate(0.000000, 12.000000)">
                  <polygon
                    id="矩形"
                    fill="url(#linearGradient-1)"
                    fillRule="nonzero"
                    points="0 0 56 0 56 64 28 52.5714286 0 64"
                  ></polygon>
                  <g id="star">
                    <polygon
                      fill="#3863FF"
                      points="28 34.905295 20.5835921 38.8 22 30.5508825 16 24.7088251 24.2917961 23.505295 28 16 31.7082039 23.505295 40 24.7088251 34 30.5508825 35.4164079 38.8"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default Star
