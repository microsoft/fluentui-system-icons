package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSprint16: ImageVector
  get() {
    if (_arrowSprint16 != null) {
      return _arrowSprint16!!
    }
    _arrowSprint16 = fluentIcon(name = "Filled.ArrowSprint16", 16f) {
      materialPath {
          moveTo(8.0F, 5.5F)
          curveToRelative(-0.436F, 0.0F, -0.84F, 0.14F, -1.168F, 0.377F)
          curveTo(6.328F, 6.24F, 6.0F, 6.832F, 6.0F, 7.5F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(4.44F)
          lineToRelative(-0.22F, -0.22F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(12.44F, 11.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          curveToRelative(0.0F, -0.627F, 0.165F, -1.216F, 0.454F, -1.725F)
          curveTo(5.556F, 4.715F, 6.694F, 4.0F, 8.0F, 4.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineToRelative(0.025F)
          curveToRelative(-0.27F, 0.276F, -0.431F, 0.62F, -0.482F, 0.975F)
          horizontalLineTo(9.732F)
          curveTo(9.902F, 8.206F, 10.0F, 7.864F, 10.0F, 7.5F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(-5.25F, 4.0F)
          horizontalLineToRelative(1.218F)
          curveToRelative(0.29F, 0.583F, 0.702F, 1.094F, 1.203F, 1.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 11.0F, 2.0F, 10.664F, 2.0F, 10.25F)
          reflectiveCurveTo(2.336F, 9.5F, 2.75F, 9.5F)
          close()        
      }
    }
    return _arrowSprint16!!
  }

private var _arrowSprint16: ImageVector? = null
