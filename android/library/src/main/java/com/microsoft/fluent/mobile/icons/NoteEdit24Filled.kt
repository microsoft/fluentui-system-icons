package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NoteEdit24: ImageVector
  get() {
    if (_noteEdit24 != null) {
      return _noteEdit24!!
    }
    _noteEdit24 = fluentIcon(name = "Filled.NoteEdit24", 24f) {
      materialPath {
          moveTo(3.0F, 17.75F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(4.915F)
          lineToRelative(0.356F, -1.423F)
          curveToRelative(0.162F, -0.648F, 0.497F, -1.24F, 0.97F, -1.712F)
          lineToRelative(5.902F, -5.903F)
          curveToRelative(0.714F, -0.713F, 1.674F, -1.03F, 2.607F, -0.95F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(4.75F)
          curveTo(11.0F, 9.545F, 9.545F, 11.0F, 7.75F, 11.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(6.75F)
          close()
          moveTo(9.5F, 3.44F)
          lineTo(3.44F, 9.5F)
          horizontalLineToRelative(4.31F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(3.44F)
          close()
          moveToRelative(9.6F, 9.23F)
          lineToRelative(-5.903F, 5.902F)
          curveToRelative(-0.344F, 0.344F, -0.588F, 0.775F, -0.706F, 1.247F)
          lineToRelative(-0.458F, 1.831F)
          curveToRelative(-0.199F, 0.796F, 0.523F, 1.517F, 1.319F, 1.318F)
          lineToRelative(1.83F, -0.457F)
          curveToRelative(0.473F, -0.118F, 0.904F, -0.363F, 1.248F, -0.707F)
          lineToRelative(5.902F, -5.902F)
          curveToRelative(0.893F, -0.893F, 0.893F, -2.34F, 0.0F, -3.232F)
          curveToRelative(-0.892F, -0.893F, -2.34F, -0.893F, -3.232F, 0.0F)
          close()        
      }
    }
    return _noteEdit24!!
  }

private var _noteEdit24: ImageVector? = null
