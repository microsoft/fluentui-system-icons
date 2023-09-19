package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TetrisApp16: ImageVector
  get() {
    if (_tetrisApp16 != null) {
      return _tetrisApp16!!
    }
    _tetrisApp16 = fluentIcon(name = "Filled.TetrisApp16", 16f) {
      materialPath {
          moveTo(6.0F, 2.75F)
          curveTo(6.0F, 2.336F, 6.336F, 2.0F, 6.75F, 2.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(2.75F)
          close()
          moveTo(2.75F, 6.0F)
          curveTo(2.336F, 6.0F, 2.0F, 6.336F, 2.0F, 6.75F)
          verticalLineToRelative(1.5F)
          curveTo(2.0F, 8.664F, 2.336F, 9.0F, 2.75F, 9.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(2.75F)
          close()
          moveTo(9.0F, 6.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(2.25F)
          curveTo(8.664F, 9.0F, 9.0F, 8.664F, 9.0F, 8.25F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.25F, -4.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(2.25F)
          curveTo(12.664F, 5.0F, 13.0F, 4.664F, 13.0F, 4.25F)
          verticalLineToRelative(-1.5F)
          curveTo(13.0F, 2.336F, 12.664F, 2.0F, 12.25F, 2.0F)
          close()
          moveTo(3.0F, 11.75F)
          curveTo(3.0F, 11.336F, 3.336F, 11.0F, 3.75F, 11.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 14.0F, 3.0F, 13.664F, 3.0F, 13.25F)
          verticalLineToRelative(-1.5F)
          close()
          moveTo(10.0F, 11.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(-3.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(-3.0F)
          close()
          moveToRelative(0.75F, -4.0F)
          curveTo(11.336F, 7.0F, 11.0F, 7.336F, 11.0F, 7.75F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(7.75F)
          curveTo(14.0F, 7.336F, 13.664F, 7.0F, 13.25F, 7.0F)
          horizontalLineToRelative(-1.5F)
          close()        
      }
    }
    return _tetrisApp16!!
  }

private var _tetrisApp16: ImageVector? = null
