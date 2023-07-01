package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleCheckmark48: ImageVector
  get() {
    if (_tableSimpleCheckmark48 != null) {
      return _tableSimpleCheckmark48!!
    }
    _tableSimpleCheckmark48 = fluentIcon(name = "Filled.TableSimpleCheckmark48", 48f) {
      materialPath {
          moveTo(12.0F, 6.0F)
          horizontalLineToRelative(10.75F)
          verticalLineToRelative(16.75F)
          horizontalLineTo(6.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveTo(6.0F, 25.25F)
          horizontalLineToRelative(16.75F)
          verticalLineTo(42.0F)
          horizontalLineTo(12.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          verticalLineTo(25.25F)
          close()
          moveToRelative(19.25F, 0.0F)
          verticalLineTo(42.0F)
          horizontalLineTo(36.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          verticalLineTo(25.25F)
          horizontalLineTo(25.25F)
          close()
          moveToRelative(0.0F, -19.25F)
          verticalLineToRelative(16.75F)
          horizontalLineTo(42.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          horizontalLineTo(25.25F)
          close()
          moveToRelative(13.13F, 25.634F)
          lineToRelative(-5.5F, 5.5F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-2.746F, -2.746F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(1.862F, 1.862F)
          lineToRelative(4.616F, -4.616F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, 1.28F, 0.0F, 1.768F)
          close()        
      }
    }
    return _tableSimpleCheckmark48!!
  }

private var _tableSimpleCheckmark48: ImageVector? = null
