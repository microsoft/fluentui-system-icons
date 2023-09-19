package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NoteAdd24: ImageVector
  get() {
    if (_noteAdd24 != null) {
      return _noteAdd24!!
    }
    _noteAdd24 = fluentIcon(name = "Filled.NoteAdd24", 24f) {
      materialPath {
          moveTo(12.0F, 6.5F)
          curveTo(12.0F, 3.462F, 9.538F, 1.0F, 6.5F, 1.0F)
          reflectiveCurveTo(1.0F, 3.462F, 1.0F, 6.5F)
          reflectiveCurveTo(3.462F, 12.0F, 6.5F, 12.0F)
          reflectiveCurveTo(12.0F, 9.538F, 12.0F, 6.5F)
          close()
          moveTo(7.0F, 7.0F)
          lineToRelative(0.001F, 2.504F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(3.496F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(3.22F, 6.0F, 3.496F, 6.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.5F)
          curveTo(6.0F, 3.222F, 6.224F, 3.0F, 6.5F, 3.0F)
          reflectiveCurveTo(7.0F, 3.222F, 7.0F, 3.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(2.503F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.779F, 7.0F, 9.503F, 7.0F)
          horizontalLineTo(7.001F)
          close()
          moveToRelative(-0.5F, 6.0F)
          curveToRelative(3.59F, 0.0F, 6.5F, -2.91F, 6.5F, -6.5F)
          curveToRelative(0.0F, -1.289F, -0.375F, -2.49F, -1.022F, -3.5F)
          horizontalLineToRelative(5.772F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(-4.75F)
          curveTo(14.455F, 13.0F, 13.0F, 14.455F, 13.0F, 16.25F)
          verticalLineTo(21.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineToRelative(-5.772F)
          curveTo(4.01F, 12.625F, 5.211F, 13.0F, 6.5F, 13.0F)
          close()
          moveToRelative(14.06F, 1.5F)
          lineToRelative(-6.06F, 6.06F)
          verticalLineToRelative(-4.31F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(4.31F)
          close()        
      }
    }
    return _noteAdd24!!
  }

private var _noteAdd24: ImageVector? = null
