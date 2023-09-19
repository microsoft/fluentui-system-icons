package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRedo24: ImageVector
  get() {
    if (_arrowRedo24 != null) {
      return _arrowRedo24!!
    }
    _arrowRedo24 = fluentIcon(name = "Regular.ArrowRedo24", 24f) {
      materialPath {
          moveTo(19.25F, 2.0F)
          curveToRelative(-0.38F, 0.0F, -0.693F, 0.282F, -0.743F, 0.648F)
          lineTo(18.5F, 2.75F)
          verticalLineToRelative(5.69F)
          lineToRelative(-4.574F, -4.56F)
          curveToRelative(-2.442F, -2.442F, -6.364F, -2.5F, -8.878F, -0.179F)
          lineToRelative(-0.186F, 0.18F)
          curveToRelative(-2.503F, 2.502F, -2.503F, 6.56F, 0.0F, 9.063F)
          lineToRelative(8.845F, 8.84F)
          curveToRelative(0.293F, 0.292F, 0.768F, 0.292F, 1.06F, -0.001F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          lineToRelative(-8.845F, -8.84F)
          curveToRelative(-1.917F, -1.917F, -1.917F, -5.025F, 0.0F, -6.942F)
          curveToRelative(1.86F, -1.86F, 4.839F, -1.916F, 6.766F, -0.168F)
          lineToRelative(0.178F, 0.169F)
          lineTo(17.438F, 9.5F)
          horizontalLineTo(11.75F)
          curveToRelative(-0.38F, 0.0F, -0.693F, 0.282F, -0.743F, 0.648F)
          lineTo(11.0F, 10.25F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(11.75F, 11.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.648F)
          lineTo(20.0F, 10.25F)
          verticalLineToRelative(-7.5F)
          curveTo(20.0F, 2.336F, 19.664F, 2.0F, 19.25F, 2.0F)
          close()        
      }
    }
    return _arrowRedo24!!
  }

private var _arrowRedo24: ImageVector? = null
