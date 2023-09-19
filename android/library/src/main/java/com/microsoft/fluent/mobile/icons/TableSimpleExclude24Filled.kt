package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleExclude24: ImageVector
  get() {
    if (_tableSimpleExclude24 != null) {
      return _tableSimpleExclude24!!
    }
    _tableSimpleExclude24 = fluentIcon(name = "Filled.TableSimpleExclude24", 24f) {
      materialPath {
          moveTo(5.25F, 2.0F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(7.5F)
          horizontalLineTo(2.0F)
          verticalLineTo(5.25F)
          curveTo(2.0F, 3.455F, 3.455F, 2.0F, 5.25F, 2.0F)
          close()
          moveTo(2.0F, 11.0F)
          verticalLineToRelative(4.25F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineTo(9.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(16.5F, -1.5F)
          verticalLineTo(5.25F)
          curveTo(18.5F, 3.455F, 17.045F, 2.0F, 15.25F, 2.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(7.5F)
          horizontalLineToRelative(7.5F)
          close()
          moveToRelative(-6.0F, 5.25F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-5.0F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineToRelative(-5.0F)
          close()        
      }
    }
    return _tableSimpleExclude24!!
  }

private var _tableSimpleExclude24: ImageVector? = null
