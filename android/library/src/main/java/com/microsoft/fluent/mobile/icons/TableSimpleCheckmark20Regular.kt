package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableSimpleCheckmark20: ImageVector
  get() {
    if (_tableSimpleCheckmark20 != null) {
      return _tableSimpleCheckmark20!!
    }
    _tableSimpleCheckmark20 = fluentIcon(name = "Regular.TableSimpleCheckmark20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveTo(4.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(3.5F)
          verticalLineToRelative(5.5F)
          horizontalLineTo(4.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(6.5F, 3.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(3.5F)
          horizontalLineToRelative(-5.5F)
          close()
          moveToRelative(-6.5F, 1.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(16.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-3.5F)
          close()
          moveToRelative(10.856F, 1.396F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-1.75F, 1.75F)
          curveToRelative(-0.195F, 0.195F, -0.51F, 0.195F, -0.706F, 0.0F)
          lineToRelative(-0.753F, -0.75F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, -0.001F, -0.707F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, -0.001F)
          lineToRelative(0.4F, 0.397F)
          lineToRelative(1.396F, -1.397F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()        
      }
    }
    return _tableSimpleCheckmark20!!
  }

private var _tableSimpleCheckmark20: ImageVector? = null
