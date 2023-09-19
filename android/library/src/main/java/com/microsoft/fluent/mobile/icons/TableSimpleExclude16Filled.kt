package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleExclude16: ImageVector
  get() {
    if (_tableSimpleExclude16 != null) {
      return _tableSimpleExclude16!!
    }
    _tableSimpleExclude16 = fluentIcon(name = "Filled.TableSimpleExclude16", 16f) {
      materialPath {
          moveTo(3.5F, 1.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(1.0F)
          verticalLineTo(3.5F)
          curveTo(1.0F, 2.12F, 2.12F, 1.0F, 3.5F, 1.0F)
          close()
          moveTo(1.0F, 9.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 12.0F, 1.0F, 10.88F, 1.0F, 9.5F)
          close()
          moveTo(12.0F, 6.0F)
          verticalLineTo(3.5F)
          curveTo(12.0F, 2.12F, 10.88F, 1.0F, 9.5F, 1.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveToRelative(-1.75F, 2.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _tableSimpleExclude16!!
  }

private var _tableSimpleExclude16: ImageVector? = null
