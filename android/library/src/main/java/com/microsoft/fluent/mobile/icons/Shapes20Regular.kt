package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shapes20: ImageVector
  get() {
    if (_shapes20 != null) {
      return _shapes20!!
    }
    _shapes20 = fluentIcon(name = "Regular.Shapes20", 20f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          curveToRelative(0.0F, 2.316F, 1.75F, 4.224F, 4.0F, 4.473F)
          verticalLineToRelative(1.005F)
          curveTo(4.197F, 12.725F, 2.0F, 10.369F, 2.0F, 7.5F)
          curveTo(2.0F, 4.462F, 4.462F, 2.0F, 7.5F, 2.0F)
          curveToRelative(2.869F, 0.0F, 5.225F, 2.197F, 5.478F, 5.0F)
          horizontalLineToRelative(-1.005F)
          curveTo(11.723F, 4.75F, 9.816F, 3.0F, 7.5F, 3.0F)
          close()
          moveToRelative(3.0F, 5.0F)
          curveTo(9.12F, 8.0F, 8.0F, 9.12F, 8.0F, 10.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(18.0F, 9.12F, 16.88F, 8.0F, 15.5F, 8.0F)
          horizontalLineToRelative(-5.0F)
          close()
          moveTo(9.0F, 10.5F)
          curveTo(9.0F, 9.672F, 9.672F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(9.672F, 17.0F, 9.0F, 16.328F, 9.0F, 15.5F)
          verticalLineToRelative(-5.0F)
          close()        
      }
    }
    return _shapes20!!
  }

private var _shapes20: ImageVector? = null
