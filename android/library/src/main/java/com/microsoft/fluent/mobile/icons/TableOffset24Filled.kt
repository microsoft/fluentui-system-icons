package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableOffset24: ImageVector
  get() {
    if (_tableOffset24 != null) {
      return _tableOffset24!!
    }
    _tableOffset24 = fluentIcon(name = "Filled.TableOffset24", 24f) {
      materialPath {
          moveTo(14.0F, 3.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(11.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(1.5F, 5.5F)
          horizontalLineTo(21.0F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(15.5F)
          verticalLineToRelative(5.5F)
          close()
          moveTo(21.0F, 10.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(11.0F)
          verticalLineToRelative(-4.0F)
          close()
          moveTo(8.5F, 10.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(5.5F)
          verticalLineToRelative(-4.0F)
          close()
          moveTo(3.0F, 17.75F)
          verticalLineTo(15.5F)
          horizontalLineToRelative(11.0F)
          verticalLineTo(21.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          close()
          moveTo(15.5F, 21.0F)
          verticalLineToRelative(-5.5F)
          horizontalLineTo(21.0F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(15.5F)
          close()        
      }
    }
    return _tableOffset24!!
  }

private var _tableOffset24: ImageVector? = null
