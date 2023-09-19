package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Home28: ImageVector
  get() {
    if (_home28 != null) {
      return _home28!!
    }
    _home28 = fluentIcon(name = "Filled.Home28", 28f) {
      materialPath {
          moveTo(15.408F, 3.498F)
          curveToRelative(-0.823F, -0.66F, -1.993F, -0.66F, -2.816F, 0.0F)
          lineToRelative(-7.75F, 6.217F)
          curveTo(4.31F, 10.142F, 4.0F, 10.787F, 4.0F, 11.47F)
          verticalLineToRelative(11.28F)
          curveTo(4.0F, 23.993F, 5.007F, 25.0F, 6.25F, 25.0F)
          horizontalLineToRelative(2.5F)
          curveTo(9.993F, 25.0F, 11.0F, 23.993F, 11.0F, 22.75F)
          verticalLineToRelative(-5.5F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(2.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(11.47F)
          curveToRelative(0.0F, -0.683F, -0.31F, -1.328F, -0.842F, -1.755F)
          lineToRelative(-7.75F, -6.217F)
          close()        
      }
    }
    return _home28!!
  }

private var _home28: ImageVector? = null
