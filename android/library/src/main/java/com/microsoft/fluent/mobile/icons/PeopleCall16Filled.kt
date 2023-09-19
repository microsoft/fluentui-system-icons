package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PeopleCall16: ImageVector
  get() {
    if (_peopleCall16 != null) {
      return _peopleCall16!!
    }
    _peopleCall16 = fluentIcon(name = "Filled.PeopleCall16", 16f) {
      materialPath {
          moveTo(5.5F, 7.0F)
          curveTo(6.88F, 7.0F, 8.0F, 5.88F, 8.0F, 4.5F)
          reflectiveCurveTo(6.88F, 2.0F, 5.5F, 2.0F)
          reflectiveCurveTo(3.0F, 3.12F, 3.0F, 4.5F)
          reflectiveCurveTo(4.12F, 7.0F, 5.5F, 7.0F)
          close()
          moveToRelative(8.0F, -2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveTo(8.0F, 8.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(0.094F)
          curveToRelative(-0.01F, 0.25F, -0.188F, 2.906F, -4.0F, 2.906F)
          curveToRelative(-4.0F, 0.0F, -4.0F, -2.925F, -4.0F, -2.925F)
          verticalLineTo(9.5F)
          curveTo(1.5F, 8.672F, 2.172F, 8.0F, 3.0F, 8.0F)
          horizontalLineToRelative(5.0F)
          close()
          moveToRelative(4.584F, 0.581F)
          lineToRelative(0.283F, -0.75F)
          curveToRelative(0.258F, -0.68F, 1.062F, -1.017F, 1.74F, -0.727F)
          lineToRelative(0.388F, 0.166F)
          curveToRelative(0.473F, 0.202F, 0.865F, 0.568F, 0.947F, 1.06F)
          curveToRelative(0.457F, 2.725F, -1.908F, 6.601F, -4.63F, 7.59F)
          curveToRelative(-0.492F, 0.178F, -1.023F, 0.04F, -1.445F, -0.246F)
          lineToRelative(-0.346F, -0.235F)
          curveToRelative(-0.603F, -0.411F, -0.698F, -1.239F, -0.204F, -1.79F)
          lineToRelative(0.545F, -0.607F)
          curveToRelative(0.257F, -0.287F, 0.658F, -0.412F, 1.034F, -0.323F)
          lineToRelative(1.225F, 0.29F)
          curveToRelative(0.971F, -0.607F, 1.492F, -1.46F, 1.562F, -2.56F)
          lineToRelative(-0.878F, -0.86F)
          curveToRelative(-0.27F, -0.263F, -0.355F, -0.654F, -0.221F, -1.008F)
          close()        
      }
    }
    return _peopleCall16!!
  }

private var _peopleCall16: ImageVector? = null
