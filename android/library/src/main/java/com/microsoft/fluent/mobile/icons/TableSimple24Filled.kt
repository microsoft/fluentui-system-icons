package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimple24: ImageVector
  get() {
    if (_tableSimple24 != null) {
      return _tableSimple24!!
    }
    _tableSimple24 = fluentIcon(name = "Filled.TableSimple24", 24f) {
      materialPath {
          moveTo(17.75F, 21.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(-8.25F)
          horizontalLineTo(21.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          close()
          moveTo(21.0F, 11.25F)
          horizontalLineToRelative(-8.25F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(5.0F)
          close()
          moveToRelative(-9.75F, 0.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(8.25F)
          close()
          moveTo(3.0F, 12.75F)
          verticalLineToRelative(5.0F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-8.25F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _tableSimple24!!
  }

private var _tableSimple24: ImageVector? = null
