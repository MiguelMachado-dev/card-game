import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%',
    })
  })

  it('should render a minimal version', () => {
    render(<Button minimal>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'rgb(242, 49, 165)',
      color: 'rgb(250, 250, 250)',
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      '#e20e8d',
      {
        modifier: ':hover',
      }
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      }
    )
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
