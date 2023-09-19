package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TetrisApp28: ImageVector
  get() {
    if (_tetrisApp28 != null) {
      return _tetrisApp28!!
    }
    _tetrisApp28 = fluentIcon(name = "Filled.TetrisApp28", 28f) {
      materialPath {
          moveTo(9.0F, 3.25F)
          curveTo(9.0F, 2.56F, 9.56F, 2.0F, 10.25F, 2.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(3.25F)
          close()
          moveTo(3.25F, 9.0F)
          curveTo(2.56F, 9.0F, 2.0F, 9.56F, 2.0F, 10.25F)
          verticalLineToRelative(3.5F)
          curveTo(2.0F, 14.44F, 2.56F, 15.0F, 3.25F, 15.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(9.0F)
          horizontalLineTo(3.25F)
          close()
          moveTo(15.0F, 9.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(4.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(5.75F, -7.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(4.75F)
          curveTo(21.44F, 8.0F, 22.0F, 7.44F, 22.0F, 6.75F)
          verticalLineToRelative(-3.5F)
          curveTo(22.0F, 2.56F, 21.44F, 2.0F, 20.75F, 2.0F)
          close()
          moveTo(5.0F, 20.256F)
          curveTo(5.0F, 19.562F, 5.562F, 19.0F, 6.256F, 19.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(6.256F)
          curveTo(5.562F, 25.0F, 5.0F, 24.438F, 5.0F, 23.744F)
          verticalLineToRelative(-3.488F)
          close()
          moveTo(18.0F, 25.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(7.0F, -6.0F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(19.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(-4.5F, -7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _tetrisApp28!!
  }

private var _tetrisApp28: ImageVector? = null
