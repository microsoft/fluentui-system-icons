package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TetrisApp20: ImageVector
  get() {
    if (_tetrisApp20 != null) {
      return _tetrisApp20!!
    }
    _tetrisApp20 = fluentIcon(name = "Filled.TetrisApp20", 20f) {
      materialPath {
          moveTo(7.0F, 2.75F)
          curveTo(7.0F, 2.336F, 7.336F, 2.0F, 7.75F, 2.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(2.75F)
          close()
          moveTo(2.75F, 7.0F)
          curveTo(2.336F, 7.0F, 2.0F, 7.336F, 2.0F, 7.75F)
          verticalLineToRelative(2.5F)
          curveTo(2.0F, 10.664F, 2.336F, 11.0F, 2.75F, 11.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(2.75F)
          close()
          moveTo(11.0F, 7.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(4.25F, -5.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(3.25F)
          curveTo(15.664F, 6.0F, 16.0F, 5.664F, 16.0F, 5.25F)
          verticalLineToRelative(-2.5F)
          curveTo(16.0F, 2.336F, 15.664F, 2.0F, 15.25F, 2.0F)
          close()
          moveTo(4.0F, 14.75F)
          curveTo(4.0F, 14.336F, 4.336F, 14.0F, 4.75F, 14.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 18.0F, 4.0F, 17.664F, 4.0F, 17.25F)
          verticalLineToRelative(-2.5F)
          close()
          moveTo(13.0F, 18.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(5.0F, -4.0F)
          verticalLineToRelative(3.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(-3.25F, -5.0F)
          curveTo(14.336F, 9.0F, 14.0F, 9.336F, 14.0F, 9.75F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(9.75F)
          curveTo(18.0F, 9.336F, 17.664F, 9.0F, 17.25F, 9.0F)
          horizontalLineToRelative(-2.5F)
          close()        
      }
    }
    return _tetrisApp20!!
  }

private var _tetrisApp20: ImageVector? = null
