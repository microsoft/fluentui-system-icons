package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleCheckmark20: ImageVector
  get() {
    if (_tableSimpleCheckmark20 != null) {
      return _tableSimpleCheckmark20!!
    }
    _tableSimpleCheckmark20 = fluentIcon(name = "Filled.TableSimpleCheckmark20", 20f) {
      materialPath {
          moveTo(14.0F, 17.0F)
          horizontalLineToRelative(-3.5F)
          verticalLineToRelative(-6.5F)
          horizontalLineTo(17.0F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          close()
          moveToRelative(3.0F, -7.5F)
          horizontalLineToRelative(-6.5F)
          verticalLineTo(3.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(3.5F)
          close()
          moveToRelative(-7.5F, 0.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(6.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(3.5F)
          horizontalLineToRelative(6.5F)
          close()
          moveToRelative(0.0F, 7.5F)
          verticalLineToRelative(-6.5F)
          horizontalLineTo(3.0F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(3.5F)
          close()
          moveToRelative(5.852F, -3.896F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-1.397F, 1.397F)
          lineToRelative(-0.399F, -0.397F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.001F)
          curveToRelative(-0.195F, 0.196F, -0.194F, 0.512F, 0.001F, 0.707F)
          lineToRelative(0.753F, 0.75F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.706F, 0.0F)
          lineToRelative(1.75F, -1.75F)
          close()        
      }
    }
    return _tableSimpleCheckmark20!!
  }

private var _tableSimpleCheckmark20: ImageVector? = null
