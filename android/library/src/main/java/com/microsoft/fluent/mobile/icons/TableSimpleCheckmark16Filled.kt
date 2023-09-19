package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleCheckmark16: ImageVector
  get() {
    if (_tableSimpleCheckmark16 != null) {
      return _tableSimpleCheckmark16!!
    }
    _tableSimpleCheckmark16 = fluentIcon(name = "Filled.TableSimpleCheckmark16", 16f) {
      materialPath {
          moveTo(8.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineTo(8.5F)
          verticalLineTo(14.0F)
          close()
          moveToRelative(0.0F, -6.5F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(-3.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(5.5F)
          close()
          moveTo(7.5F, 2.0F)
          verticalLineToRelative(5.5F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(-3.0F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveTo(2.0F, 11.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          close()
          moveToRelative(10.854F, -0.646F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-0.75F, -0.75F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(11.0F, 11.293F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          close()        
      }
    }
    return _tableSimpleCheckmark16!!
  }

private var _tableSimpleCheckmark16: ImageVector? = null
